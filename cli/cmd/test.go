package cmd

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"github.com/spf13/cobra"
)

// QuestManifest represents the quest.json file in each mission folder
type QuestManifest struct {
	MissionID string `json:"mission_id"`
	Title     string `json:"title"`
	Language  string `json:"language"`
	Expected  string `json:"expected"`
}

// testCmd represents the test command
var testCmd = &cobra.Command{
	Use:   "test",
	Short: "Run local tests for the current mission",
	Long: `Execute your solution locally and verify the output.
Run this command from inside a mission directory (e.g., arrays-1/).

Example:
  cd arrays-1
  quest test`,
	Run: func(cmd *cobra.Command, args []string) {
		// 1. Find quest.json or detect language from files
		cwd, err := os.Getwd()
		if err != nil {
			fmt.Println("❌ Error getting current directory:", err)
			return
		}

		manifest, hasManifest := loadManifest(cwd)
		language := detectLanguage(cwd)

		if language == "" {
			fmt.Println("❌ No supported code files found in this directory.")
			fmt.Println("   Supported: main.go, solution.py")
			return
		}

		missionID := filepath.Base(cwd)
		if hasManifest {
			missionID = manifest.MissionID
		}

		fmt.Printf("🧪 Testing mission: %s\n", missionID)
		fmt.Printf("📝 Language detected: %s\n\n", language)

		// 2. Run the code
		var output string
		var runErr error

		switch language {
		case "go":
			output, runErr = runGoCode(cwd)
		case "python":
			output, runErr = runPythonCode(cwd)
		}

		if runErr != nil {
			fmt.Println("❌ Execution failed:")
			fmt.Println(output)
			return
		}

		// 3. Display output
		fmt.Println("📤 Output:")
		fmt.Println("─────────────────────────────")
		fmt.Println(strings.TrimSpace(output))
		fmt.Println("─────────────────────────────")
		fmt.Println()

		// 4. Check for expected output (simple check)
		if hasManifest && manifest.Expected != "" {
			if strings.Contains(output, manifest.Expected) {
				fmt.Println("✅ TEST PASSED!")
				fmt.Println("   Run 'quest submit' to record your progress.")
			} else {
				fmt.Printf("❌ TEST FAILED - Expected output to contain: %s\n", manifest.Expected)
			}
		} else {
			// No manifest - ask user to verify
			fmt.Println("🔍 Please verify the output matches the expected result.")
			fmt.Println("   If correct, run 'quest submit' to record your progress.")
		}
	},
}

func loadManifest(dir string) (QuestManifest, bool) {
	manifestPath := filepath.Join(dir, "quest.json")
	data, err := os.ReadFile(manifestPath)
	if err != nil {
		return QuestManifest{}, false
	}

	var manifest QuestManifest
	if err := json.Unmarshal(data, &manifest); err != nil {
		return QuestManifest{}, false
	}

	return manifest, true
}

func detectLanguage(dir string) string {
	// Check for Go files first
	if _, err := os.Stat(filepath.Join(dir, "main.go")); err == nil {
		return "go"
	}
	// Check for Python
	if _, err := os.Stat(filepath.Join(dir, "solution.py")); err == nil {
		return "python"
	}
	return ""
}

func runGoCode(dir string) (string, error) {
	cmd := exec.Command("go", "run", "main.go")
	cmd.Dir = dir
	output, err := cmd.CombinedOutput()
	return string(output), err
}

func runPythonCode(dir string) (string, error) {
	cmd := exec.Command("python3", "solution.py")
	cmd.Dir = dir
	output, err := cmd.CombinedOutput()
	return string(output), err
}

func init() {
	rootCmd.AddCommand(testCmd)
}
