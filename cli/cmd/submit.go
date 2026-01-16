// Package cmd provides the submit command for submitting verified results.
package cmd

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"time"

	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/api"
	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/ui"
	"github.com/spf13/cobra"
)

var submitCmd = &cobra.Command{
	Use:   "submit",
	Short: "Submit your solution for verification",
	Long: `Submit your test results for server-side verification.

This command sends your output hash to the server, which verifies
it matches the expected results. If successful, you earn XP!

You must run 'charm test' first to generate a valid session.

Example:
  cd two-sum
  charm test
  charm submit`,
	Run: runSubmit,
}

func init() {
	rootCmd.AddCommand(submitCmd)
}

func runSubmit(cmd *cobra.Command, args []string) {
	cwd, err := os.Getwd()
	if err != nil {
		ui.PrintError(fmt.Sprintf("Failed to get current directory: %v", err))
		return
	}

	apiKey, err := requireAPIKey()
	if err != nil {
		ui.PrintError(err.Error())
		return
	}

	// Try hidden .charm folder first, then fallback to root
	sessionPath := filepath.Join(cwd, ".charm", "session.json")
	if _, err := os.Stat(sessionPath); os.IsNotExist(err) {
		sessionPath = filepath.Join(cwd, ".session.json")
	}

	sessionData, err := os.ReadFile(sessionPath)
	if err != nil {
		ui.PrintError("No test session found")
		fmt.Println("  Run 'charm test' first to generate a session.")
		return
	}

	var session api.LocalSession
	if err := json.Unmarshal(sessionData, &session); err != nil {
		ui.PrintError("Invalid session file - run 'charm test' again")
		return
	}

	ui.PrintMiniBanner()
	ui.PrintHeader("SUBMITTING: " + session.MissionID)
	fmt.Println()

	if session.IsExpired() {
		ui.PrintError("Session expired!")
		fmt.Println()
		fmt.Printf("  Session was valid until: %s\n", session.ExpiresAt.Format(time.RFC822))
		fmt.Printf("  Current time:            %s\n", time.Now().Format(time.RFC822))
		fmt.Println()
		fmt.Println("  Run 'charm test' to get a new session.")
		return
	}

	remaining := time.Until(session.ExpiresAt)
	if remaining < 5*time.Minute {
		ui.PrintWarning(fmt.Sprintf("Session expires in %s!", formatDuration(remaining)))
	} else {
		ui.Gray.Printf("  Session valid for: %s\n", formatDuration(remaining))
	}
	fmt.Println()

	sp := ui.NewSpinner("Transmitting results to HQ", ui.SpinnerDots)
	sp.Start()

	req := &api.SubmitRequest{
		SessionID:   session.SessionID,
		APIKey:      apiKey,
		Outputs:     session.Outputs,
		OutputsHash: session.OutputHash,
	}

	resp, err := apiClient.Submit(req)
	if err != nil {
		sp.Fail(err.Error())
		return
	}

	if !resp.Success {
		sp.Fail("Verification failed")
		fmt.Println()
		ui.PrintError(resp.Message)
		fmt.Println()
		fmt.Println("  Your outputs don't match the expected results.")
		fmt.Println("  Check your solution and run 'charm test' again.")
		return
	}

	sp.Success("Verification successful!")
	fmt.Println()

	showXPAnimation(resp.XPAwarded, resp.NewTotal)

	os.Remove(sessionPath)

	fmt.Println()
	ui.PrintSuccess("Mission complete!")
	fmt.Println()
	fmt.Println("  Continue your journey:", ui.Cyan.Sprint("charm list"))
	fmt.Println()
}

func showXPAnimation(xpAwarded, newTotal int) {
	fmt.Println()

	ui.Accent.Println("  ╔═══════════════════════════════════╗")
	ui.Accent.Printf("  ║     ")
	ui.Success.Printf("⚡ +%d XP EARNED! ⚡", xpAwarded)
	padding := 22 - len(fmt.Sprintf("%d", xpAwarded))
	fmt.Printf("%*s║\n", padding, "")
	ui.Accent.Println("  ╚═══════════════════════════════════╝")
	fmt.Println()

	if newTotal > 0 {
		ui.Gray.Printf("  Total XP: %s\n", ui.Accent.Sprintf("%d", newTotal))
	}
}

func formatDuration(d time.Duration) string {
	if d < time.Minute {
		return fmt.Sprintf("%.0f seconds", d.Seconds())
	} else if d < time.Hour {
		return fmt.Sprintf("%.0f minutes", d.Minutes())
	}
	return fmt.Sprintf("%.1f hours", d.Hours())
}
