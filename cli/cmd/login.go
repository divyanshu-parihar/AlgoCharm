package cmd

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

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

		// Save the API key to the config
		viper.Set("api_key", apiKey)

		// Get the config file path
		home, err := os.UserHomeDir()
		if err != nil {
			fmt.Println("Error finding home directory:", err)
			return
		}
		configPath := filepath.Join(home, ".codequest.yaml")

		// Write to config file
		err = viper.WriteConfigAs(configPath)
		if err != nil {
			fmt.Println("Error saving credentials:", err)
			return
		}

		fmt.Println("✅ Authentication successful!")
		fmt.Printf("Credentials saved to %s\n", configPath)
		fmt.Println("You are now ready to start your first mission.")
		fmt.Println("Try running: quest start arrays-1")
	},
}

func init() {
	rootCmd.AddCommand(loginCmd)
}
