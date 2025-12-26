package main

import "fmt"

// GetAccessCode returns the 3rd element of the security logs
func GetAccessCode(logs []int) int {
	// Return the 3rd element (index 2)
	return logs[2]
}

func main() {
	// Local test
	logs := []int{10, 20, 30, 40, 50}
	result := GetAccessCode(logs)
	fmt.Printf("Result: %d (Expected: 30)\n", result)
}
