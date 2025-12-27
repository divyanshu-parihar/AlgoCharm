package cmd

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// SubmitRequest is the payload sent to the server
type SubmitRequest struct {
	SessionID   string                   `json:"session_id"`
	APIKey      string                   `json:"api_key"`
	Outputs     []map[string]interface{} `json:"outputs"`
	OutputsHash string                   `json:"outputs_hash"`
}

// SubmitResponse is the server's response
type SubmitResponse struct {
	Success   bool   `json:"success"`
	Message   string `json:"message"`
	XPAwarded int    `json:"xp_awarded"`
	Passed    int    `json:"passed"`
	Total     int    `json:"total"`
}

// submitCmd represents the submit command
var submitCmd = &cobra.Command{
	Use:   "submit",
	Short: "Submit your verified solution to HQ",
	Long: `Submit your test results to the server for verification.
You must run 'quest test' first to generate a session.

Example:
  cd spin-grid
  quest test    # Run tests first
  quest submit  # Submit results`,
	Run: func(cmd *cobra.Command, args []string) {
		// 1. Check if logged in
		apiKey := viper.GetString("api_key")
		if apiKey == "" {
			fmt.Println("❌ You are not logged in.")
			fmt.Println("   Run 'quest login <api_key>' first.")
			return
		}

		// 2. Load session from ~/.codequest-session.json
		home, _ := os.UserHomeDir()
		sessionPath := filepath.Join(home, ".codequest-session.json")

		sessionData, err := os.ReadFile(sessionPath)
		if err != nil {
			fmt.Println("❌ No test session found.")
			fmt.Println("   Run 'quest test' first to generate a session.")
			return
		}

		var session SessionData
		if err := json.Unmarshal(sessionData, &session); err != nil {
			fmt.Println("❌ Invalid session file.")
			fmt.Println("   Run 'quest test' again to generate a new session.")
			return
		}

		// 3. Check if session is expired
		expiresAt, _ := time.Parse(time.RFC3339, session.ExpiresAt)
		if time.Now().After(expiresAt) {
			fmt.Println("❌ Session has expired.")
			fmt.Println("   Run 'quest test' again to generate a new session.")
			os.Remove(sessionPath)
			return
		}

		fmt.Printf("📡 Submitting mission: %s\n", session.MissionID)
		fmt.Printf("   Session: %s...\n\n", session.SessionID[:8])

		// 4. Ask for confirmation
		fmt.Print("✅ Submit this solution? (y/n): ")
		reader := bufio.NewReader(os.Stdin)
		response, _ := reader.ReadString('\n')
		response = strings.TrimSpace(strings.ToLower(response))

		if response != "y" && response != "yes" {
			fmt.Println("Submission cancelled.")
			return
		}

		// 5. Send to server
		fmt.Println("\n📡 Sending verified results to HQ...")

		submitReq := SubmitRequest{
			SessionID:   session.SessionID,
			APIKey:      apiKey,
			Outputs:     session.Outputs,
			OutputsHash: session.OutputHash,
		}

		jsonData, _ := json.Marshal(submitReq)

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
			fmt.Println("   Try again later when you have an internet connection.")
			return
		}
		defer resp.Body.Close()

		body, _ := io.ReadAll(resp.Body)

		var submitResp SubmitResponse
		if err := json.Unmarshal(body, &submitResp); err != nil {
			fmt.Println("⚠️  Invalid server response")
			fmt.Println("   Raw:", string(body))
			return
		}

		if submitResp.Success {
			fmt.Println("\n🎉 MISSION COMPLETE!")
			fmt.Printf("   +%d XP Earned!\n", submitResp.XPAwarded)
			fmt.Printf("   Tests passed: %d/%d\n", submitResp.Passed, submitResp.Total)
			fmt.Println("\n💡 Tip: Check your campaign map for the next mission!")

			// Clean up session file
			os.Remove(sessionPath)
		} else {
			fmt.Printf("❌ Submission failed: %s\n", submitResp.Message)
			if submitResp.Total > 0 {
				fmt.Printf("   Tests passed: %d/%d\n", submitResp.Passed, submitResp.Total)
			}
			fmt.Println("\n💡 Tip: Run 'quest test' again to retry.")
		}
	},
}

func init() {
	rootCmd.AddCommand(submitCmd)
}
