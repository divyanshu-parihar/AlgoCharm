// Package cmd provides the login command for authentication.
package cmd

import (
	"fmt"

	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/ui"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var loginCmd = &cobra.Command{
	Use:   "login <api-key>",
	Short: "Authenticate with your CodeQuest API key",
	Long: `Authenticate the Field Kit with your CodeQuest account.

You can find your API key in your dashboard at:
  https://codequest.dev/dashboard

Example:
  quest login cq_abc123xyz`,
	Args: cobra.ExactArgs(1),
	Run:  runLogin,
}

func init() {
	rootCmd.AddCommand(loginCmd)
}

func runLogin(cmd *cobra.Command, args []string) {
	apiKey := args[0]

	if len(apiKey) < 3 || apiKey[:3] != "cq_" {
		ui.PrintError("Invalid API key format")
		fmt.Println("  API keys start with 'cq_' and can be found in your dashboard.")
		return
	}

	sp := ui.NewSpinner("Validating API key with HQ", ui.SpinnerDots)
	sp.Start()

	resp, err := apiClient.ValidateAPIKey(apiKey)
	if err != nil {
		sp.Fail(fmt.Sprintf("Connection failed: %v", err))
		fmt.Println()
		ui.PrintWarning("Saving key locally - it will be validated on next command.")

		viper.Set("api_key", apiKey)
		if err := saveConfig(); err != nil {
			ui.PrintError(fmt.Sprintf("Failed to save config: %v", err))
		}
		return
	}

	if !resp.Valid {
		sp.Fail("Invalid API key")
		fmt.Println()
		ui.PrintError(resp.Error)
		fmt.Println("  Check your API key in the CodeQuest dashboard.")
		return
	}

	viper.Set("api_key", apiKey)
	if err := saveConfig(); err != nil {
		sp.Fail("Failed to save credentials")
		ui.PrintError(err.Error())
		return
	}

	sp.Success("Authentication successful")
	fmt.Println()

	if resp.Username != "" {
		ui.Accent.Printf("  Welcome back, %s!\n", resp.Username)
	} else {
		ui.Accent.Println("  Welcome, Agent!")
	}

	fmt.Println()
	fmt.Println("  Your credentials are saved. You're ready to start!")
	fmt.Println()
	ui.PrintStep(1, "Start a mission: "+ui.Cyan.Sprint("quest start <mission-id>"))
	fmt.Println()
}
