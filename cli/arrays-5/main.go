package main

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
