// Package cmd contains all CLI commands for the Charm CLI.
// This file defines the root command and global configuration.
package cmd

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/api"
	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/ui"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	cfgFile   string
	debug     bool
	apiClient *api.Client
)

var rootCmd = &cobra.Command{
	Use:   "charm",
	Short: "Charm CLI - Master algorithms through missions",
	Long: `
  ╔═══════════════════════════════════════════════════════════╗
  ║   ▓▓▓ CHARM ▓▓▓   Master Algorithms Through Missions      ║
  ╚═══════════════════════════════════════════════════════════╝

  Charm CLI helps you:
  
    • Start coding missions with 'charm start <mission>'
    • Test your solutions locally with 'charm test'
    • Submit for XP with 'charm submit'
    
  Get started by authenticating:
    charm login <your-api-key>
`,
	Version: ui.Version,
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(initConfig)

	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default: ~/.charm.yaml)")
	rootCmd.PersistentFlags().BoolVar(&debug, "debug", false, "enable debug output")
	rootCmd.PersistentFlags().String("server", "", "API server URL")

	viper.BindPFlag("debug", rootCmd.PersistentFlags().Lookup("debug"))
	viper.BindPFlag("server_url", rootCmd.PersistentFlags().Lookup("server"))

	rootCmd.SetVersionTemplate(`{{.Name}} v{{.Version}}
`)
}

func initConfig() {
	if cfgFile != "" {
		viper.SetConfigFile(cfgFile)
	} else {
		home, err := os.UserHomeDir()
		if err != nil {
			fmt.Fprintln(os.Stderr, "Error finding home directory:", err)
			os.Exit(1)
		}

		viper.AddConfigPath(home)
		viper.SetConfigType("yaml")
		viper.SetConfigName(".charm")
	}

	viper.SetEnvPrefix("CHARM")
	viper.AutomaticEnv()
	viper.SetDefault("server_url", "https://charm.workbuzz.me")

	if err := viper.ReadInConfig(); err == nil {
		if debug {
			fmt.Fprintln(os.Stderr, "Using config file:", viper.ConfigFileUsed())
		}
	}

	initAPIClient()
}

func initAPIClient() {
	opts := []api.ClientOption{
		api.WithBaseURL(viper.GetString("server_url")),
		api.WithDebug(viper.GetBool("debug")),
	}

	if apiKey := viper.GetString("api_key"); apiKey != "" {
		opts = append(opts, api.WithAPIKey(apiKey))
	}

	apiClient = api.NewClient(opts...)
}

func requireAPIKey() (string, error) {
	apiKey := viper.GetString("api_key")
	if apiKey == "" {
		return "", fmt.Errorf("not authenticated - run 'charm login <api-key>' first")
	}
	return apiKey, nil
}

func getConfigPath() string {
	if cfgFile != "" {
		return cfgFile
	}
	home, _ := os.UserHomeDir()
	return filepath.Join(home, ".charm.yaml")
}

func saveConfig() error {
	return viper.WriteConfigAs(getConfigPath())
}
