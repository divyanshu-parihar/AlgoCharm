package cmd

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"
)

// Mock data structure (will replace with API response later)
type MissionData struct {
	ID          string
	Title       string
	Description string
	Expected    string            // Expected output substring for verification
	Files       map[string]string // filename -> content
}

// Mock database of missions
var mockMissions = map[string]MissionData{
	// MISSION 1: Array Access (Easy)
	"arrays-1": {
		ID:    "arrays-1",
		Title: "The Vault Door",
		Description: `# Mission: The Vault Door

## 🐿️ Dice Says
*"Agent, the vault door ahead has a numeric lock. The combination is hidden in the security logs - specifically, the 3rd entry. Simple extraction job."*

## Objective
Access the 3rd element of the 'security_logs' array.

## Instructions
1. You are given a function 'GetAccessCode'.
2. It receives an array of integers (the security logs).
3. Return the element at index 2 (the 3rd element).

## Expected Output
Result: 30
`,
		Expected: "30",
		Files: map[string]string{
			"main.go": `package main

import "fmt"

// GetAccessCode returns the 3rd element of the security logs
func GetAccessCode(logs []int) int {
	// TODO: Implement your logic here
	return 0
}

func main() {
	logs := []int{10, 20, 30, 40, 50}
	result := GetAccessCode(logs)
	fmt.Printf("Result: %d (Expected: 30)\n", result)
}
`,
			"solution.py": `def get_access_code(logs):
    # TODO: Return the 3rd element of the list
    return 0

if __name__ == "__main__":
    logs = [10, 20, 30, 40, 50]
    result = get_access_code(logs)
    print(f"Result: {result} (Expected: 30)")
`,
		},
	},

	// MISSION 2: Array Sum (Easy)
	"arrays-2": {
		ID:    "arrays-2",
		Title: "Power Grid Override",
		Description: `# Mission: Power Grid Override

## 🐿️ Dice Says
*"We need to calculate the total power consumption to override the grid. Sum up all the readings from the sensors, agent. Every watt counts."*

## Objective
Calculate the sum of all elements in an array.

## Instructions
1. You are given a function 'CalculateTotalPower'.
2. It receives an array of integers (power readings).
3. Return the sum of ALL elements.

## Expected Output
Total: 150
`,
		Expected: "150",
		Files: map[string]string{
			"main.go": `package main

import "fmt"

// CalculateTotalPower returns the sum of all power readings
func CalculateTotalPower(readings []int) int {
	// TODO: Sum all elements in the array
	return 0
}

func main() {
	readings := []int{10, 20, 30, 40, 50}
	total := CalculateTotalPower(readings)
	fmt.Printf("Total: %d (Expected: 150)\n", total)
}
`,
			"solution.py": `def calculate_total_power(readings):
    # TODO: Sum all elements in the list
    return 0

if __name__ == "__main__":
    readings = [10, 20, 30, 40, 50]
    total = calculate_total_power(readings)
    print(f"Total: {total} (Expected: 150)")
`,
		},
	},

	// MISSION 3: Find Maximum (Easy-Medium)
	"arrays-3": {
		ID:    "arrays-3",
		Title: "The Highest Signal",
		Description: `# Mission: The Highest Signal

## 🐿️ Dice Says
*"We're intercepting enemy transmissions. Find the strongest signal - that's where the command center is. Scan through all frequencies and report the maximum."*

## Objective
Find the maximum value in an array.

## Instructions
1. You are given a function 'FindStrongestSignal'.
2. It receives an array of integers (signal strengths).
3. Return the MAXIMUM value in the array.

## Hint
Loop through and keep track of the largest value seen so far.

## Expected Output
Strongest: 89
`,
		Expected: "89",
		Files: map[string]string{
			"main.go": `package main

import "fmt"

// FindStrongestSignal returns the maximum signal strength
func FindStrongestSignal(signals []int) int {
	// TODO: Find and return the maximum value
	return 0
}

func main() {
	signals := []int{23, 45, 12, 89, 34, 67}
	strongest := FindStrongestSignal(signals)
	fmt.Printf("Strongest: %d (Expected: 89)\n", strongest)
}
`,
			"solution.py": `def find_strongest_signal(signals):
    # TODO: Find and return the maximum value
    return 0

if __name__ == "__main__":
    signals = [23, 45, 12, 89, 34, 67]
    strongest = find_strongest_signal(signals)
    print(f"Strongest: {strongest} (Expected: 89)")
`,
		},
	},

	// MISSION 4: Reverse Array (Medium)
	"arrays-4": {
		ID:    "arrays-4",
		Title: "Mirror Protocol",
		Description: `# Mission: Mirror Protocol

## 🐿️ Dice Says  
*"The encrypted message was sent backwards - classic spy trick. Reverse the sequence to decode it. Watch out, we need to do this IN PLACE to avoid detection."*

## Objective
Reverse an array in-place.

## Instructions
1. You are given a function 'DecodeMessage'.
2. It receives an array of integers.
3. Reverse the array IN PLACE (modify the original).
4. Return the reversed array.

## Hint
Use two pointers - one at the start, one at the end. Swap and move inward.

## Expected Output
Decoded: [5 4 3 2 1]
`,
		Expected: "[5 4 3 2 1]",
		Files: map[string]string{
			"main.go": `package main

import "fmt"

// DecodeMessage reverses the array in-place
func DecodeMessage(message []int) []int {
	// TODO: Reverse the array in-place using two pointers
	return message
}

func main() {
	message := []int{1, 2, 3, 4, 5}
	decoded := DecodeMessage(message)
	fmt.Printf("Decoded: %v (Expected: [5 4 3 2 1])\n", decoded)
}
`,
			"solution.py": `def decode_message(message):
    # TODO: Reverse the list in-place using two pointers
    return message

if __name__ == "__main__":
    message = [1, 2, 3, 4, 5]
    decoded = decode_message(message)
    print(f"Decoded: {decoded} (Expected: [5, 4, 3, 2, 1])")
`,
		},
	},

	// MISSION 5: Two Sum (Medium)
	"arrays-5": {
		ID:    "arrays-5",
		Title: "The Key Pair",
		Description: `# Mission: The Key Pair

## 🐿️ Dice Says
*"The final vault needs TWO keys that add up to a specific code. Find the indices of the two numbers that sum to our target. This is a classic infiltration pattern, agent."*

## Objective
Find two numbers in an array that add up to a target sum.

## Instructions
1. You are given a function 'FindKeyPair'.
2. It receives an array of integers and a target sum.
3. Return the INDICES of two numbers that add up to the target.
4. Return [-1, -1] if no pair exists.

## Hint
You can use a map/dictionary to store seen numbers and their indices.

## Expected Output
Keys at: [1 3]
`,
		Expected: "[1 3]",
		Files: map[string]string{
			"main.go": `package main

import "fmt"

// FindKeyPair returns indices of two numbers that sum to target
func FindKeyPair(codes []int, target int) []int {
	// TODO: Find two indices where codes[i] + codes[j] == target
	return []int{-1, -1}
}

func main() {
	codes := []int{2, 7, 11, 15}
	target := 22
	result := FindKeyPair(codes, target)
	fmt.Printf("Keys at: %v (Expected: [1 3])\n", result)
}
`,
			"solution.py": `def find_key_pair(codes, target):
    # TODO: Find two indices where codes[i] + codes[j] == target
    return [-1, -1]

if __name__ == "__main__":
    codes = [2, 7, 11, 15]
    target = 22
    result = find_key_pair(codes, target)
    print(f"Keys at: {result} (Expected: [1, 3])")
`,
		},
	},
}

// startCmd represents the start command
var startCmd = &cobra.Command{
	Use:   "start [mission_id]",
	Short: "Start a new mission",
	Long: `Download mission files and initialize your workspace.
Example:
  quest start arrays-1`,
	Args: cobra.ExactArgs(1),
	Run: func(cmd *cobra.Command, args []string) {
		missionID := args[0]

		fmt.Printf("📡 Connecting to HQ... Fetching mission '%s'...\n", missionID)

		// 1. Fetch Mission (Mocked)
		mission, exists := mockMissions[missionID]
		if !exists {
			fmt.Printf("❌ Mission '%s' not found.\n", missionID)
			return
		}

		// 2. Create Directory
		cwd, _ := os.Getwd()
		missionDir := filepath.Join(cwd, missionID)

		if _, err := os.Stat(missionDir); !os.IsNotExist(err) {
			fmt.Printf("⚠️  Directory '%s' already exists. Aborting to prevent overwrite.\n", missionID)
			return
		}

		err := os.Mkdir(missionDir, 0755)
		if err != nil {
			fmt.Printf("❌ Error creating directory: %v\n", err)
			return
		}

		// 3. Write Files
		for filename, content := range mission.Files {
			filePath := filepath.Join(missionDir, filename)
			err := os.WriteFile(filePath, []byte(content), 0644)
			if err != nil {
				fmt.Printf("❌ Error writing %s: %v\n", filename, err)
			}
		}

		// Write Description
		readmePath := filepath.Join(missionDir, "README.md")
		os.WriteFile(readmePath, []byte(mission.Description), 0644)

		// Write quest.json manifest for test/submit commands
		questManifest := fmt.Sprintf(`{
  "mission_id": "%s",
  "title": "%s",
  "language": "go",
  "expected": "%s"
}`, mission.ID, mission.Title, mission.Expected)
		manifestPath := filepath.Join(missionDir, "quest.json")
		os.WriteFile(manifestPath, []byte(questManifest), 0644)

		fmt.Println("\n✅ Mission Initialized!")
		fmt.Printf("📂 Location: %s\n", missionDir)
		fmt.Println("📝 Files created:")
		fmt.Println("   - README.md (Instructions)")
		fmt.Println("   - quest.json (Mission metadata)")
		for f := range mission.Files {
			fmt.Printf("   - %s\n", f)
		}
		fmt.Printf("\nTo begin, cd into '%s' and start coding!\n", missionID)
		fmt.Println("When ready, run 'quest test' to verify your solution.")
	},
}

func init() {
	rootCmd.AddCommand(startCmd)
}
