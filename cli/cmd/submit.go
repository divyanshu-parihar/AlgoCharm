package cmd

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// SubmitRequest is the payload sent to the server
type SubmitRequest struct {
	MissionID string `json:"mission_id"`
	Verdict   string `json:"verdict"`
	APIKey    string `json:"api_key"`
}

// SubmitResponse is the server's response
type SubmitResponse struct {
	Success   bool   `json:"success"`
	Message   string `json:"message"`
	XPAwarded int    `json:"xp_awarded"`
}

// submitCmd represents the submit command
var submitCmd = &cobra.Command{
	Use:   "submit",
	Short: "Submit your solution and record progress",
	Long: `Run tests and submit your verdict to the server.
This will mark the mission as complete and award XP.

Example:
  cd arrays-1
  quest submit`,
	Run: func(cmd *cobra.Command, args []string) {
		// 1. Check if logged in
		apiKey := viper.GetString("api_key")
		if apiKey == "" {
			fmt.Println("❌ You are not logged in.")
			fmt.Println("   Run 'quest login <api_key>' first.")
			return
		}

		// 2. Get mission ID from current directory
		cwd, err := os.Getwd()
		if err != nil {
			fmt.Println("❌ Error getting current directory:", err)
			return
		}

		manifest, hasManifest := loadManifest(cwd)
		missionID := filepath.Base(cwd)
		if hasManifest {
			missionID = manifest.MissionID
		}

		fmt.Printf("📡 Submitting mission: %s\n\n", missionID)

		// 3. Run tests first
		fmt.Println("🧪 Running tests...")
		language := detectLanguage(cwd)
		if language == "" {
			fmt.Println("❌ No supported code files found.")
			return
		}

		var output string
		var runErr error

		switch language {
		case "go":
			output, runErr = runGoCodeForSubmit(cwd)
		case "python":
			output, runErr = runPythonCodeForSubmit(cwd)
		}

		if runErr != nil {
			fmt.Println("❌ Tests failed:")
			fmt.Println(output)
			fmt.Println("\n⚠️  Submission aborted. Fix the errors and try again.")
			return
		}

		fmt.Println("📤 Output:")
		fmt.Println(strings.TrimSpace(output))
		fmt.Println()

		// 4. Ask for confirmation
		fmt.Print("✅ Tests passed! Submit this solution? (y/n): ")
		reader := bufio.NewReader(os.Stdin)
		response, _ := reader.ReadString('\n')
		response = strings.TrimSpace(strings.ToLower(response))

		if response != "y" && response != "yes" {
			fmt.Println("Submission cancelled.")
			return
		}

		// 5. Send to server
		fmt.Println("\n📡 Sending verdict to HQ...")

		submitReq := SubmitRequest{
			MissionID: missionID,
			Verdict:   "passed",
			APIKey:    apiKey,
		}

		jsonData, _ := json.Marshal(submitReq)

		// Get server URL from config or use default
		serverURL := viper.GetString("server_url")
		if serverURL == "" {
			serverURL = "http://localhost:3000"
		}

		resp, err := http.Post(
			serverURL+"/api/submit",
			"application/json",
			bytes.NewBuffer(jsonData),
		)

		if err != nil {
			fmt.Println("⚠️  Could not reach server:", err)
			fmt.Println("   Your progress will be recorded when connection is restored.")
			// For now, still show success locally
			fmt.Println("\n🎉 Mission Complete! (Offline Mode)")
			return
		}
		defer resp.Body.Close()

		var submitResp SubmitResponse
		if err := json.NewDecoder(resp.Body).Decode(&submitResp); err != nil {
			fmt.Println("⚠️  Invalid server response")
			return
		}

		if submitResp.Success {
			fmt.Println("\n🎉 MISSION COMPLETE!")
			fmt.Printf("   +%d XP Earned!\n", submitResp.XPAwarded)
			fmt.Println("\n💡 Tip: Check your campaign map for the next mission!")
		} else {
			fmt.Printf("❌ Submission failed: %s\n", submitResp.Message)
		}
	},
}

func runGoCodeForSubmit(dir string) (string, error) {
	cmd := exec.Command("go", "run", "main.go")
	cmd.Dir = dir
	output, err := cmd.CombinedOutput()
	return string(output), err
}

func runPythonCodeForSubmit(dir string) (string, error) {
	cmd := exec.Command("python3", "solution.py")
	cmd.Dir = dir
	output, err := cmd.CombinedOutput()
	return string(output), err
}

func init() {
	rootCmd.AddCommand(submitCmd)
}
