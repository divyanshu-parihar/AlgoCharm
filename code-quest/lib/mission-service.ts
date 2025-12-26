// This service handles mission logic.
// Currently it returns static data, but it's structured to easily switch to DB calls.

export interface MissionFiles {
  [filename: string]: string;
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  files: MissionFiles;
}

export const MissionService = {
  async getMissionById(missionId: string): Promise<Mission | null> {
    // TODO: Replace with DB call
    // const mission = await db.query.exercises.findFirst({ where: eq(exercises.id, missionId) });
    
    if (missionId === "arrays-1") {
      return {
        id: "arrays-1",
        title: "The Vault Door",
        description: `# Mission: The Vault Door

## Objective
Access the 3rd element of the 'security_logs' array.

## Story
Dice points to the heavy steel door. "The combination is hidden in the logs. We just need to pull it out."

## Instructions
1. You are given a function 'GetAccessCode'.
2. It receives an array of integers.
3. Return the element at index 2 (the 3rd element).
`,
        files: {
          "main.go": `package main

import "fmt"

// GetAccessCode returns the 3rd element of the security logs
func GetAccessCode(logs []int) int {
	// TODO: Implement your logic here
	return 0
}

func main() {
	// Local test
	logs := []int{10, 20, 30, 40, 50}
	result := GetAccessCode(logs)
	fmt.Printf("Result: %d (Expected: 30)\n", result)
}
`,
          "solution.py": `def get_access_code(logs):
    # TODO: Implement your logic here
    # Return the 3rd element of the list
    return 0

if __name__ == "__main__":
    # Local test
    logs = [10, 20, 30, 40, 50]
    result = get_access_code(logs)
    print(f"Result: {result} (Expected: 30)")
`,
        }
      };
    }
    
    return null;
  }
};
