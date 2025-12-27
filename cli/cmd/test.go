package cmd

import (
	"bytes"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

// QuestManifest represents the quest.json file in each mission folder
type QuestManifest struct {
	MissionID string `json:"mission_id"`
	Title     string `json:"title"`
	Language  string `json:"language"`
	Expected  string `json:"expected"`
}

// ChallengeResponse from server
type ChallengeResponse struct {
	SessionID  string     `json:"session_id"`
	ExerciseID string     `json:"exercise_id"`
	Inputs     []TestCase `json:"inputs"`
	ExpiresAt  string     `json:"expires_at"`
	Error      string     `json:"error,omitempty"`
}

// TestCase for testing
type TestCase struct {
	ID       int         `json:"id"`
	Input    interface{} `json:"input"`
	Expected interface{} `json:"expected,omitempty"` // Only for public tests
}

// SessionData saved locally for submit
type SessionData struct {
	SessionID  string                   `json:"session_id"`
	MissionID  string                   `json:"mission_id"`
	Outputs    []map[string]interface{} `json:"outputs"`
	OutputHash string                   `json:"output_hash"`
	ExpiresAt  string                   `json:"expires_at"`
	CreatedAt  string                   `json:"created_at"`
}

// testCmd represents the test command
var testCmd = &cobra.Command{
	Use:   "test",
	Short: "Run local tests for the current mission",
	Long: `Fetch test cases from HQ and run your solution locally.
Run this command from inside a mission directory (e.g., spin-grid/).

Example:
  cd spin-grid
  quest test`,
	Run: func(cmd *cobra.Command, args []string) {
		// 1. Check login
		apiKey := viper.GetString("api_key")
		if apiKey == "" {
			fmt.Println("❌ You are not logged in.")
			fmt.Println("   Run 'quest login <api_key>' first.")
			return
		}

		// 2. Get current directory and mission info
		cwd, err := os.Getwd()
		if err != nil {
			fmt.Println("❌ Error getting current directory:", err)
			return
		}

		manifest, hasManifest := loadManifest(cwd)
		language := detectLanguage(cwd)

		if language == "" {
			fmt.Println("❌ No supported code files found in this directory.")
			fmt.Println("   Supported: solution.ts, main.go, solution.cpp")
			return
		}

		missionID := filepath.Base(cwd)
		if hasManifest {
			missionID = manifest.MissionID
		}

		fmt.Printf("🧪 Testing mission: %s\n", missionID)
		fmt.Printf("📝 Language detected: %s\n\n", language)

		// 3. Fetch challenge from server
		fmt.Println("📡 Fetching test cases from HQ...")
		serverURL := viper.GetString("server_url")
		if serverURL == "" {
			serverURL = "http://localhost:3000"
		}

		challenge, err := fetchChallenge(serverURL, missionID, apiKey)
		if err != nil {
			fmt.Printf("❌ Failed to fetch challenge: %v\n", err)
			fmt.Println("   Running in offline mode with local tests...")
			runOfflineTest(cwd, language, manifest, hasManifest)
			return
		}

		fmt.Printf("✅ Received %d test cases (session expires: %s)\n\n", len(challenge.Inputs), challenge.ExpiresAt)

		// 4. Run tests
		var results []map[string]interface{}
		passCount := 0

		for _, testCase := range challenge.Inputs {
			fmt.Printf("Running test #%d... ", testCase.ID)

			output, err := runTestCase(cwd, language, testCase.Input)
			if err != nil {
				fmt.Printf("❌ Error: %v\n", err)
				results = append(results, map[string]interface{}{
					"id":     testCase.ID,
					"output": nil,
					"error":  err.Error(),
				})
				continue
			}

			// Check against expected if available (public tests)
			if testCase.Expected != nil {
				expectedJSON, _ := json.Marshal(testCase.Expected)
				outputJSON, _ := json.Marshal(output)
				if string(expectedJSON) == string(outputJSON) {
					fmt.Println("✅ PASS")
					passCount++
				} else {
					fmt.Println("❌ FAIL")
					fmt.Printf("   Expected: %s\n", expectedJSON)
					fmt.Printf("   Got:      %s\n", outputJSON)
				}
			} else {
				// Hidden test - just run
				fmt.Println("✓ Complete (hidden)")
				passCount++
			}

			results = append(results, map[string]interface{}{
				"id":     testCase.ID,
				"output": output,
			})
		}

		fmt.Println("\n─────────────────────────────")
		fmt.Printf("Results: %d/%d tests passed\n", passCount, len(challenge.Inputs))
		fmt.Println("─────────────────────────────")

		// 5. Compute hash and save session
		outputValues := make([]interface{}, len(results))
		for i, r := range results {
			outputValues[i] = r["output"]
		}
		outputJSON, _ := json.Marshal(outputValues)
		hash := sha256.Sum256(outputJSON)
		outputHash := hex.EncodeToString(hash[:])

		session := SessionData{
			SessionID:  challenge.SessionID,
			MissionID:  missionID,
			Outputs:    results,
			OutputHash: outputHash,
			ExpiresAt:  challenge.ExpiresAt,
			CreatedAt:  time.Now().Format(time.RFC3339),
		}

		// Save session to ~/.codequest-session.json
		home, _ := os.UserHomeDir()
		sessionPath := filepath.Join(home, ".codequest-session.json")
		sessionJSON, _ := json.MarshalIndent(session, "", "  ")
		os.WriteFile(sessionPath, sessionJSON, 0600)

		if passCount == len(challenge.Inputs) {
			fmt.Println("\n🎉 ALL TESTS PASSED!")
			fmt.Println("   Run 'quest submit' to record your progress and earn XP.")
		} else {
			fmt.Println("\n⚠️  Some tests failed. Fix your solution and run 'quest test' again.")
		}
	},
}

func fetchChallenge(serverURL, missionID, apiKey string) (*ChallengeResponse, error) {
	url := fmt.Sprintf("%s/api/challenge?mission_id=%s&api_key=%s", serverURL, missionID, apiKey)

	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("network error: %v", err)
	}
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != 200 {
		var errResp struct {
			Error string `json:"error"`
		}
		json.Unmarshal(body, &errResp)
		return nil, fmt.Errorf("server error: %s", errResp.Error)
	}

	var challenge ChallengeResponse
	if err := json.Unmarshal(body, &challenge); err != nil {
		return nil, fmt.Errorf("invalid response: %v", err)
	}

	return &challenge, nil
}

func runTestCase(dir, language string, input interface{}) (interface{}, error) {
	inputJSON, _ := json.Marshal(input)

	var cmd *exec.Cmd
	switch language {
	case "go":
		cmd = exec.Command("go", "run", ".")
	case "typescript":
		cmd = exec.Command("npx", "ts-node", "runner.ts")
	case "cpp":
		// Compile first if needed
		if _, err := os.Stat(filepath.Join(dir, "solution")); os.IsNotExist(err) {
			compile := exec.Command("g++", "-std=c++17", "-o", "solution", "solution.cpp", "runner.cpp")
			compile.Dir = dir
			if out, err := compile.CombinedOutput(); err != nil {
				return nil, fmt.Errorf("compilation failed: %s", out)
			}
		}
		cmd = exec.Command("./solution")
	default:
		return nil, fmt.Errorf("unsupported language: %s", language)
	}

	cmd.Dir = dir
	cmd.Stdin = bytes.NewReader(inputJSON)

	output, err := cmd.Output()
	if err != nil {
		if exitErr, ok := err.(*exec.ExitError); ok {
			return nil, fmt.Errorf("runtime error: %s", exitErr.Stderr)
		}
		return nil, err
	}

	var result interface{}
	if err := json.Unmarshal(bytes.TrimSpace(output), &result); err != nil {
		return nil, fmt.Errorf("invalid output JSON: %v", err)
	}

	return result, nil
}

func runOfflineTest(cwd, language string, manifest QuestManifest, hasManifest bool) {
	// Fallback to old behavior for offline mode
	var output string
	var runErr error

	switch language {
	case "go":
		output, runErr = runGoCode(cwd)
	case "typescript":
		cmd := exec.Command("npx", "ts-node", "solution.ts")
		cmd.Dir = cwd
		out, err := cmd.CombinedOutput()
		output, runErr = string(out), err
	case "cpp":
		output, runErr = runCppCode(cwd)
	}

	if runErr != nil {
		fmt.Println("❌ Execution failed:")
		fmt.Println(output)
		return
	}

	fmt.Println("📤 Output:")
	fmt.Println("─────────────────────────────")
	fmt.Println(strings.TrimSpace(output))
	fmt.Println("─────────────────────────────")
	fmt.Println()

	if hasManifest && manifest.Expected != "" {
		if strings.Contains(output, manifest.Expected) {
			fmt.Println("✅ TEST PASSED! (Offline Mode)")
		} else {
			fmt.Printf("❌ TEST FAILED - Expected: %s\n", manifest.Expected)
		}
	} else {
		fmt.Println("🔍 Please verify the output manually. (Offline Mode)")
	}
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
	// Check for TypeScript
	if _, err := os.Stat(filepath.Join(dir, "solution.ts")); err == nil {
		return "typescript"
	}
	// Check for Go files
	if _, err := os.Stat(filepath.Join(dir, "main.go")); err == nil {
		return "go"
	}
	// Check for C++
	if _, err := os.Stat(filepath.Join(dir, "solution.cpp")); err == nil {
		return "cpp"
	}
	return ""
}

func runGoCode(dir string) (string, error) {
	cmd := exec.Command("go", "run", ".")
	cmd.Dir = dir
	output, err := cmd.CombinedOutput()
	return string(output), err
}

func runCppCode(dir string) (string, error) {
	// Compile
	compile := exec.Command("g++", "-std=c++17", "-o", "solution", "solution.cpp")
	compile.Dir = dir
	if out, err := compile.CombinedOutput(); err != nil {
		return string(out), err
	}

	// Run
	cmd := exec.Command("./solution")
	cmd.Dir = dir
	output, err := cmd.CombinedOutput()
	return string(output), err
}

func init() {
	rootCmd.AddCommand(testCmd)
}
