// Go Runner Template
// This file is provided by CodeQuest - DO NOT MODIFY
// Your solution goes in solution.go

package main

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

func main() {
	// Read input from stdin
	input, _ := io.ReadAll(os.Stdin)

	var data interface{}
	json.Unmarshal(input, &data)

	// Call user's solution
	output := Solve(data)

	// Output result as JSON
	result, _ := json.Marshal(output)
	fmt.Println(string(result))
}
