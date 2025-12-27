package cmd

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// ValidateResponse from the server
type ValidateResponse struct {
	Valid    bool   `json:"valid"`
	Username string `json:"username,omitempty"`
	Email    string `json:"email,omitempty"`
	Error    string `json:"error,omitempty"`
}

// loginCmd represents the login command
var loginCmd = &cobra.Command{
	Use:   "login [api_key]",
	Short: "Authenticate with your API Key",
	Long: `Authenticate the Field Kit with your CodeQuest account.
You can find your API Key in your profile settings on the website.

Example:
  quest login cq_123456789`,
	Args: cobra.ExactArgs(1), // Requires exactly one argument
	Run: func(cmd *cobra.Command, args []string) {
		apiKey := args[0]

		// Basic format validation
		if len(apiKey) < 8 {
			fmt.Println("❌ Invalid API key format.")
			fmt.Println("   API keys should start with 'cq_' and be at least 8 characters.")
			return
		}

		// Get server URL
		serverURL := viper.GetString("server_url")
		if serverURL == "" {
			serverURL = "http://localhost:3000"
		}

		// Validate API key with server
		fmt.Println("🔐 Validating API key with HQ...")

		resp, err := http.Get(fmt.Sprintf("%s/api/auth/validate?api_key=%s", serverURL, apiKey))
		if err != nil {
			fmt.Println("⚠️  Could not reach server:", err)
			fmt.Println("   Saving key locally. It will be validated on next command.")
			saveAPIKey(apiKey)
			return
		}
		defer resp.Body.Close()

		body, _ := io.ReadAll(resp.Body)

		// If endpoint doesn't exist (404), save locally
		if resp.StatusCode == 404 {
			fmt.Println("⚠️  Validation endpoint not available.")
			fmt.Println("   Saving key locally. It will be validated on next command.")
			saveAPIKey(apiKey)
			return
		}

		var validateResp ValidateResponse
		if err := json.Unmarshal(body, &validateResp); err != nil {
			fmt.Println("⚠️  Invalid server response.")
			fmt.Println("   Saving key locally. It will be validated on next command.")
			saveAPIKey(apiKey)
			return
		}

		if !validateResp.Valid {
			fmt.Printf("❌ Invalid API key: %s\n", validateResp.Error)
			fmt.Println("   Check your API key in the CodeQuest dashboard.")
			return
		}

		// Success!
		saveAPIKey(apiKey)
		fmt.Println("✅ Authentication successful!")
		if validateResp.Username != "" {
			fmt.Printf("   Welcome, %s!\n", validateResp.Username)
		}
		fmt.Println("You are now ready to start your first mission.")
		fmt.Println("Try running: quest start spin-grid")
	},
}

func saveAPIKey(apiKey string) {
	viper.Set("api_key", apiKey)

	home, err := os.UserHomeDir()
	if err != nil {
		fmt.Println("Error finding home directory:", err)
		return
	}
	configPath := filepath.Join(home, ".codequest.yaml")

	err = viper.WriteConfigAs(configPath)
	if err != nil {
		fmt.Println("Error saving credentials:", err)
		return
	}
	fmt.Printf("Credentials saved to %s\n", configPath)
}

func init() {
	rootCmd.AddCommand(loginCmd)
}
