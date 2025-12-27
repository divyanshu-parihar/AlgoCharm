// Package ui provides terminal user interface components.
// This file defines color constants for consistent styling across the CLI.
package ui

import (
	"github.com/fatih/color"
)

// Color definitions for consistent CLI styling
var (
	// Primary colors
	Accent    = color.New(color.FgHiCyan, color.Bold)
	Secondary = color.New(color.FgHiMagenta)

	// Status colors
	Green  = color.New(color.FgHiGreen)
	Red    = color.New(color.FgHiRed)
	Yellow = color.New(color.FgHiYellow)
	Cyan   = color.New(color.FgCyan)

	// Text colors
	White = color.New(color.FgHiWhite)
	Gray  = color.New(color.FgHiBlack)
	Bold  = color.New(color.Bold)

	// Special styles
	Success = color.New(color.FgHiGreen, color.Bold)
	Error   = color.New(color.FgHiRed, color.Bold)
	Warning = color.New(color.FgHiYellow, color.Bold)
	Info    = color.New(color.FgHiCyan)

	// Dim for less prominent text
	Dim = color.New(color.FgWhite, color.Faint)
)

// Colorize applies a color to text if color output is enabled
func Colorize(c *color.Color, text string) string {
	return c.Sprint(text)
}

// DisableColors turns off color output (for non-TTY or CI)
func DisableColors() {
	color.NoColor = true
}

// EnableColors turns on color output
func EnableColors() {
	color.NoColor = false
}
