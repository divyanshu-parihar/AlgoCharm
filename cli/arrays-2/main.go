package main

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
