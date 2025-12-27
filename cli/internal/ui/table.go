// Package ui provides terminal user interface components.
// This file provides table rendering for test results.
package ui

import (
	"fmt"
	"strings"
)

// TestResultRow represents a test result row
type TestResultRow struct {
	ID       int
	Name     string
	Status   string // "pass", "fail", "hidden"
	Expected string
	Actual   string
	Input    string
	Time     string
}

// RenderTestResults displays test results in a formatted table
func RenderTestResults(results []TestResultRow) {
	fmt.Println()

	// Header
	fmt.Println("  ┌─────┬────────────────────────────┬──────────────┬──────────┐")
	fmt.Println("  │  #  │        Test Case           │    Status    │   Time   │")
	fmt.Println("  ├─────┼────────────────────────────┼──────────────┼──────────┤")

	passed := 0
	failed := 0
	hidden := 0

	for _, r := range results {
		var statusStr string

		switch r.Status {
		case "pass":
			statusStr = Green.Sprint("  ✓ PASS   ")
			passed++
		case "fail":
			statusStr = Red.Sprint("  ✗ FAIL   ")
			failed++
		case "hidden":
			statusStr = Green.Sprint("  ✓ HIDDEN ")
			hidden++
		default:
			statusStr = "  ?        "
		}

		name := r.Name
		if name == "" {
			name = fmt.Sprintf("Test %d", r.ID+1)
		}

		// Truncate/pad name to fixed width
		name = padOrTruncate(name, 26)

		fmt.Printf("  │ %3d │ %s │%s│ %8s │\n",
			r.ID+1,
			name,
			statusStr,
			padOrTruncate(r.Time, 8),
		)
	}

	fmt.Println("  └─────┴────────────────────────────┴───────────┴──────────┘")

	// Show failure details for public tests
	for _, r := range results {
		if r.Status == "fail" && r.Expected != "" {
			fmt.Println()
			fmt.Printf("  %s %s\n", Red.Sprint("✗"), Bold.Sprint(r.Name))
			if r.Input != "" {
				fmt.Printf("    Input:    %s\n", Cyan.Sprint(r.Input))
			}
			fmt.Printf("    Expected: %s\n", Green.Sprint(r.Expected))
			fmt.Printf("    Actual:   %s\n", Red.Sprint(r.Actual))
		}
	}

	// Summary
	fmt.Println()
	summary := fmt.Sprintf("  Results: %s passed", Green.Sprintf("%d", passed))
	if failed > 0 {
		summary += fmt.Sprintf(", %s failed", Red.Sprintf("%d", failed))
	}
	if hidden > 0 {
		summary += fmt.Sprintf(", %s hidden", Green.Sprintf("%d", hidden))
	}
	fmt.Println(summary)
}

// padOrTruncate ensures a string is exactly the given length
func padOrTruncate(s string, length int) string {
	if len(s) > length {
		return s[:length-1] + "…"
	}
	return s + strings.Repeat(" ", length-len(s))
}

// ProgressBar renders a simple progress bar
func ProgressBar(current, total int, width int) string {
	if total == 0 {
		return ""
	}

	pct := float64(current) / float64(total)
	filled := int(pct * float64(width))
	empty := width - filled

	bar := strings.Repeat("█", filled) + strings.Repeat("░", empty)
	return fmt.Sprintf("[%s] %d/%d", bar, current, total)
}
