// Package cmd provides the start command for downloading missions.
package cmd

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"github.com/divyanshu-parihar/AlgoCharm/cli/internal/ui"
	"github.com/spf13/cobra"
)

var language string

var startCmd = &cobra.Command{
	Use:   "start <mission-id>",
	Short: "Start a new mission",
	Long: `Start a coding mission by downloading the problem and starter code.

This creates a new directory with your solution file ready to edit.

Examples:
  quest start two-sum
  quest start spin-grid --lang typescript`,
	Args: cobra.ExactArgs(1),
	Run:  runStart,
}

func init() {
	rootCmd.AddCommand(startCmd)
	startCmd.Flags().StringVarP(&language, "lang", "l", "go", "Solution language (go, typescript, cpp)")
}

func runStart(cmd *cobra.Command, args []string) {
	missionID := args[0]

	apiKey, err := requireAPIKey()
	if err != nil {
		ui.PrintError(err.Error())
		return
	}

	missionDir := filepath.Join(".", missionID)
	if _, err := os.Stat(missionDir); err == nil {
		ui.PrintWarning(fmt.Sprintf("Directory '%s' already exists", missionID))
		fmt.Println("  Use 'cd", missionID, "' to continue working on it.")
		return
	}

	sp := ui.NewSpinner("Fetching mission briefing", ui.SpinnerDots)
	sp.Start()

	mission, err := apiClient.GetMission(missionID)
	if err != nil {
		sp.Fail(err.Error())
		return
	}

	sp.Success("Mission briefing received")
	fmt.Println()

	ui.PrintHeader("MISSION: " + mission.Title)
	fmt.Println()
	ui.Gray.Printf("  Difficulty: %s\n", difficultyBadge(mission.Difficulty))
	ui.Gray.Printf("  XP Reward:  %s\n", ui.Accent.Sprintf("%d XP", mission.XPReward))
	fmt.Println()
	fmt.Println("  " + truncate(mission.Description, 200))
	fmt.Println()

	// Create mission directory
	if err := os.MkdirAll(missionDir, 0755); err != nil {
		ui.PrintError(fmt.Sprintf("Failed to create directory: %v", err))
		return
	}

	// Create hidden .codequest folder for metadata
	hiddenDir := filepath.Join(missionDir, ".codequest")
	if err := os.MkdirAll(hiddenDir, 0755); err != nil {
		ui.PrintError(fmt.Sprintf("Failed to create metadata directory: %v", err))
		return
	}

	// Use the server-generated starter code (now includes full problem + types)
	starterCode, ok := mission.StarterCode[language]
	if !ok {
		// Fallback to other languages
		for _, lang := range []string{"go", "typescript", "cpp"} {
			if code, found := mission.StarterCode[lang]; found {
				starterCode = code
				language = lang
				break
			}
		}
	}

	if starterCode == "" {
		ui.PrintError("No starter code available for this mission")
		return
	}

	ext := languageExtension(language)
	solutionPath := filepath.Join(missionDir, "solution"+ext)
	if err := os.WriteFile(solutionPath, []byte(starterCode), 0644); err != nil {
		ui.PrintError(fmt.Sprintf("Failed to write solution file: %v", err))
		return
	}

	// Write runner to hidden folder
	runnerCode := getRunnerCode(language)
	if runnerCode != "" {
		runnerPath := filepath.Join(hiddenDir, "runner"+ext)
		os.WriteFile(runnerPath, []byte(runnerCode), 0644)
	}

	// Write quest metadata to hidden folder
	questMeta := map[string]interface{}{
		"id":          mission.ID,
		"title":       mission.Title,
		"description": mission.Description,
		"difficulty":  mission.Difficulty,
		"xp_reward":   mission.XPReward,
		"language":    language,
		"api_key":     apiKey,
	}
	questJSON, _ := json.MarshalIndent(questMeta, "", "  ")
	questPath := filepath.Join(hiddenDir, "quest.json")
	os.WriteFile(questPath, questJSON, 0644)

	// For Go, write go.mod in main folder (needed for compilation)
	if language == "go" {
		goMod := fmt.Sprintf("module %s\n\ngo 1.21\n", missionID)
		os.WriteFile(filepath.Join(missionDir, "go.mod"), []byte(goMod), 0644)
	}

	// Add .gitignore to hide .codequest folder
	gitignore := ".codequest/\n"
	os.WriteFile(filepath.Join(missionDir, ".gitignore"), []byte(gitignore), 0644)

	ui.PrintSuccess("Mission initialized!")
	fmt.Println()
	fmt.Printf("  %s\n", ui.Cyan.Sprintf("cd %s", missionID))
	fmt.Println()
	ui.PrintStep(1, "Open solution"+ext+" and implement your solution")
	ui.PrintStep(2, "Run 'quest test' to check your work")
	ui.PrintStep(3, "Run 'quest submit' when all tests pass")
	fmt.Println()
}

// generateSolutionWithProblem creates a LeetCode-style solution template with full problem description
func generateSolutionWithProblem(title, description, difficulty, lang string) string {
	// Format problem description as comments
	problemComment := formatProblemComment(title, description, difficulty, lang)

	switch lang {
	case "go":
		return fmt.Sprintf(`%s

package main

// Solve takes the input and returns the solution
// Modify the input/output types as needed for the problem
func Solve(input interface{}) interface{} {
	// TODO: Implement your solution here
	
	// Example: If input is []int
	// nums := input.([]interface{})
	// for _, v := range nums {
	//     num := int(v.(float64))
	// }
	
	return nil
}
`, problemComment)

	case "typescript", "ts":
		return fmt.Sprintf(`%s

/**
 * Solve the problem
 * @param input - The input data (type depends on the problem)
 * @returns The solution
 */
export function solve(input: unknown): unknown {
  // TODO: Implement your solution here
  
  // Example: If input is number[]
  // const nums = input as number[];
  
  return null;
}
`, problemComment)

	case "cpp", "c++":
		return fmt.Sprintf(`%s

#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
#include "nlohmann/json.hpp"

using json = nlohmann::json;
using namespace std;

/**
 * Solve the problem
 * @param input - The input data as JSON
 * @returns The solution as JSON
 */
json solve(json input) {
    // TODO: Implement your solution here
    
    // Example: If input is vector<int>
    // vector<int> nums = input.get<vector<int>>();
    
    return nullptr;
}
`, problemComment)

	default:
		return problemComment + "\n// TODO: Implement your solution"
	}
}

// formatProblemComment formats the problem description as language-appropriate comments
func formatProblemComment(title, description, difficulty, lang string) string {
	var sb strings.Builder

	// Clean up description - remove markdown headers, extra newlines
	cleanDesc := strings.ReplaceAll(description, "# ", "")
	cleanDesc = strings.ReplaceAll(cleanDesc, "## ", "")
	cleanDesc = strings.TrimSpace(cleanDesc)

	lines := strings.Split(cleanDesc, "\n")

	switch lang {
	case "go":
		sb.WriteString("/*\n")
		sb.WriteString(fmt.Sprintf(" * %s\n", title))
		sb.WriteString(fmt.Sprintf(" * Difficulty: %s\n", strings.Title(difficulty)))
		sb.WriteString(" * \n")
		for _, line := range lines {
			sb.WriteString(fmt.Sprintf(" * %s\n", strings.TrimSpace(line)))
		}
		sb.WriteString(" */")

	case "typescript", "ts":
		sb.WriteString("/**\n")
		sb.WriteString(fmt.Sprintf(" * %s\n", title))
		sb.WriteString(fmt.Sprintf(" * Difficulty: %s\n", strings.Title(difficulty)))
		sb.WriteString(" * \n")
		for _, line := range lines {
			sb.WriteString(fmt.Sprintf(" * %s\n", strings.TrimSpace(line)))
		}
		sb.WriteString(" */")

	case "cpp", "c++":
		sb.WriteString("/*\n")
		sb.WriteString(fmt.Sprintf(" * %s\n", title))
		sb.WriteString(fmt.Sprintf(" * Difficulty: %s\n", strings.Title(difficulty)))
		sb.WriteString(" * \n")
		for _, line := range lines {
			sb.WriteString(fmt.Sprintf(" * %s\n", strings.TrimSpace(line)))
		}
		sb.WriteString(" */")

	default:
		sb.WriteString(fmt.Sprintf("// %s\n", title))
		sb.WriteString(fmt.Sprintf("// Difficulty: %s\n", strings.Title(difficulty)))
		for _, line := range lines {
			sb.WriteString(fmt.Sprintf("// %s\n", strings.TrimSpace(line)))
		}
	}

	return sb.String()
}

func languageExtension(lang string) string {
	switch lang {
	case "go":
		return ".go"
	case "typescript", "ts":
		return ".ts"
	case "cpp", "c++":
		return ".cpp"
	default:
		return ".go"
	}
}

func difficultyBadge(diff string) string {
	switch diff {
	case "easy":
		return ui.Green.Sprint("Easy")
	case "medium":
		return ui.Yellow.Sprint("Medium")
	case "hard":
		return ui.Red.Sprint("Hard")
	case "boss":
		return ui.Secondary.Sprint("⚔ BOSS")
	default:
		return diff
	}
}

func truncate(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}

func getRunnerCode(lang string) string {
	switch lang {
	case "go":
		return `package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	var input interface{}
	json.Unmarshal(scanner.Bytes(), &input)
	
	output := Solve(input)
	
	result, _ := json.Marshal(output)
	fmt.Println(string(result))
}
`
	case "typescript", "ts":
		return `import { solve } from '../solution';

async function main() {
  const chunks: Buffer[] = [];
  process.stdin.on('data', (chunk) => chunks.push(chunk));
  await new Promise<void>((resolve) => process.stdin.on('end', resolve));
  const input = JSON.parse(Buffer.concat(chunks).toString());
  const output = solve(input);
  console.log(JSON.stringify(output));
}

main();
`
	case "cpp", "c++":
		return `#include <iostream>
#include <string>
#include "nlohmann/json.hpp"
#include "../solution.cpp"

using json = nlohmann::json;

int main() {
    std::string input;
    std::getline(std::cin, input);
    json in = json::parse(input);
    json out = solve(in);
    std::cout << out.dump() << std::endl;
    return 0;
}
`
	default:
		return ""
	}
}
