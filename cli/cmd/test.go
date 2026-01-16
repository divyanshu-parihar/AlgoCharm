// Package cmd provides the test command for running local tests.
package cmd

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/api"
	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/crypto"
	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/runner"
	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/ui"
	"github.com/spf13/cobra"
)

var testCmd = &cobra.Command{
	Use:   "test",
	Short: "Run tests against your solution",
	Long: `Run all test cases against your solution locally.

This command:
  1. Fetches test inputs from the server
  2. Runs your solution against each test
  3. Computes a verification hash
  4. Saves the session for submission

After tests pass, use 'charm submit' to claim your XP.

Example:
  cd two-sum
  charm test`,
	Run: runTest,
}

func init() {
	rootCmd.AddCommand(testCmd)
}

func runTest(cmd *cobra.Command, args []string) {
	cwd, err := os.Getwd()
	if err != nil {
		ui.PrintError(fmt.Sprintf("Failed to get current directory: %v", err))
		return
	}

	// Try hidden .charm folder first, then fallback to root
	questPath := filepath.Join(cwd, ".charm", "mission.json")
	if _, err := os.Stat(questPath); os.IsNotExist(err) {
		questPath = filepath.Join(cwd, "mission.json")
	}

	questData, err := os.ReadFile(questPath)
	if err != nil {
		ui.PrintError("No mission.json found - are you in a mission directory?")
		fmt.Println("  Use 'charm start <mission-id>' to begin a mission first.")
		return
	}

	var questMeta map[string]interface{}
	if err := json.Unmarshal(questData, &questMeta); err != nil {
		ui.PrintError("Invalid mission.json format")
		return
	}

	missionID, _ := questMeta["id"].(string)
	if missionID == "" {
		ui.PrintError("Mission ID not found in mission.json")
		return
	}

	apiKey, err := requireAPIKey()
	if err != nil {
		ui.PrintError(err.Error())
		return
	}

	ui.PrintMiniBanner()
	ui.PrintHeader("TESTING: " + missionID)
	fmt.Println()

	r, err := runner.DetectRunner(cwd)
	if err != nil {
		ui.PrintError(err.Error())
		return
	}
	ui.PrintInfo(fmt.Sprintf("Detected %s solution", r.Language()))

	sp := ui.NewSpinner("Fetching test cases from HQ", ui.SpinnerDots)
	sp.Start()

	challenge, err := apiClient.GetChallenge(missionID, apiKey)
	if err != nil {
		sp.Fail(err.Error())
		return
	}

	sp.Success(fmt.Sprintf("Received %d test cases", len(challenge.TestCases)))
	fmt.Println()

	sp = ui.NewSpinner(fmt.Sprintf("Preparing %s solution", r.Language()), ui.SpinnerLine)
	sp.Start()

	ctx, cancel := context.WithTimeout(context.Background(), 60*time.Second)
	defer cancel()

	if err := r.Prepare(ctx, cwd); err != nil {
		sp.Fail(err.Error())
		return
	}
	sp.Success("Solution prepared")
	fmt.Println()

	fmt.Println("  Running tests...")
	fmt.Println()

	results := make([]ui.TestResultRow, len(challenge.TestCases))
	outputs := make([]crypto.TestOutput, len(challenge.TestCases))

	passCount := 0
	failCount := 0

	for i, tc := range challenge.TestCases {
		inputJSON, _ := json.Marshal(tc.Input)

		start := time.Now()
		outputBytes, runErr := r.Run(ctx, cwd, inputJSON)
		execTime := time.Since(start)

		results[i] = ui.TestResultRow{
			ID:    tc.ID,
			Name:  tc.Name,
			Input: string(inputJSON),
			Time:  fmt.Sprintf("%.1fms", float64(execTime.Microseconds())/1000),
		}

		if runErr != nil {
			results[i].Status = "fail"
			results[i].Actual = runErr.Error()
			outputs[i] = crypto.TestOutput{ID: tc.ID, Output: nil}
			failCount++
			continue
		}

		var output interface{}
		if err := json.Unmarshal(outputBytes, &output); err != nil {
			output = string(outputBytes)
		}

		outputs[i] = crypto.TestOutput{ID: tc.ID, Output: output}

		if tc.Expected != nil {
			expectedJSON, _ := json.Marshal(tc.Expected)
			actualJSON, _ := json.Marshal(output)

			if string(expectedJSON) == string(actualJSON) {
				results[i].Status = "pass"
				passCount++
			} else {
				results[i].Status = "fail"
				results[i].Expected = string(expectedJSON)
				results[i].Actual = string(actualJSON)
				failCount++
			}
		} else {
			results[i].Status = "hidden"
		}
	}

	ui.RenderTestResults(results)
	fmt.Println()

	outputHash, err := crypto.HashOutputs(outputs)
	if err != nil {
		ui.PrintError(fmt.Sprintf("Failed to compute output hash: %v", err))
		return
	}

	session := api.LocalSession{
		SessionID:  challenge.SessionID,
		MissionID:  missionID,
		Outputs:    convertOutputs(outputs),
		OutputHash: outputHash,
		ExpiresAt:  challenge.ExpiresAt,
		CreatedAt:  time.Now(),
	}

	// Save session for submission in hidden folder
	hiddenDir := filepath.Join(cwd, ".charm")
	os.MkdirAll(hiddenDir, 0755)

	sessionPath := filepath.Join(hiddenDir, "session.json")
	sessionJSON, _ := json.MarshalIndent(session, "", "  ")
	if err := os.WriteFile(sessionPath, sessionJSON, 0600); err != nil {
		ui.PrintWarning("Failed to save session - you may need to re-test before submitting")
	}

	if failCount > 0 {
		fmt.Println()
		ui.PrintWarning(fmt.Sprintf("%d test(s) failed - fix your solution and try again", failCount))
	} else if passCount > 0 {
		fmt.Println()
		ui.PrintSuccess("All visible tests passed!")
		fmt.Println()
		fmt.Println("  Ready to submit? Run:", ui.Cyan.Sprint("charm submit"))
		fmt.Println()
		ui.Gray.Printf("  Session expires: %s\n", challenge.ExpiresAt.Format(time.RFC822))
	}

	r.Cleanup(cwd)
}

func convertOutputs(outputs []crypto.TestOutput) []api.TestOutput {
	result := make([]api.TestOutput, len(outputs))
	for i, o := range outputs {
		result[i] = api.TestOutput{
			ID:      o.ID,
			Output:  o.Output,
			Success: o.Output != nil,
		}
	}
	return result
}
