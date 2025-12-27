// Package ui provides terminal user interface components for the CodeQuest CLI.
// It includes ASCII banners, spinners, color formatting, and table rendering.
package ui

import (
	"fmt"
	"strings"
)

// Version information - set at build time
var (
	Version   = "1.0.0"
	BuildTime = "dev"
)

// Banner displays the Charm ASCII art banner
const Banner = `
   ██████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗
  ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║
  ██║     ███████║███████║██████╔╝██╔████╔██║
  ██║     ██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║
  ╚██████╗██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║
   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝
`

// MiniBanner displays a compact ASCII banner
const MiniBanner = `
  ╔═══════════════════════════════════════════════════════════╗
  ║   ▓▓▓ CHARM ▓▓▓   Master Algorithms Through Missions      ║
  ╚═══════════════════════════════════════════════════════════╝
`

// PrintBanner displays the main ASCII banner with version info
func PrintBanner() {
	Cyan.Print(Banner)
	fmt.Printf("  %s v%s\n", Gray.Sprint("CLI"), Accent.Sprint(Version))
	fmt.Println()
}

// PrintMiniBanner displays the compact banner
func PrintMiniBanner() {
	Cyan.Print(MiniBanner)
}

// PrintHeader displays a section header
func PrintHeader(title string) {
	fmt.Println()
	Accent.Printf("  ▸ %s\n", title)
	fmt.Println("  " + strings.Repeat("─", len(title)+4))
}

// PrintSuccess displays a success message
func PrintSuccess(msg string) {
	Green.Printf("  ✓ %s\n", msg)
}

// PrintError displays an error message
func PrintError(msg string) {
	Red.Printf("  ✗ %s\n", msg)
}

// PrintWarning displays a warning message
func PrintWarning(msg string) {
	Yellow.Printf("  ⚠ %s\n", msg)
}

// PrintInfo displays an info message
func PrintInfo(msg string) {
	Cyan.Printf("  ℹ %s\n", msg)
}

// PrintStep displays a numbered step
func PrintStep(num int, msg string) {
	fmt.Printf("  %s %s\n", Accent.Sprintf("[%d]", num), msg)
}

// Box creates a box around text
func Box(title string, lines ...string) string {
	maxLen := len(title)
	for _, line := range lines {
		if len(line) > maxLen {
			maxLen = len(line)
		}
	}

	width := maxLen + 4
	result := fmt.Sprintf("  ┌%s┐\n", strings.Repeat("─", width))
	result += fmt.Sprintf("  │  %s%s  │\n", title, strings.Repeat(" ", maxLen-len(title)))
	result += fmt.Sprintf("  ├%s┤\n", strings.Repeat("─", width))
	for _, line := range lines {
		result += fmt.Sprintf("  │  %s%s  │\n", line, strings.Repeat(" ", maxLen-len(line)))
	}
	result += fmt.Sprintf("  └%s┘\n", strings.Repeat("─", width))
	return result
}
