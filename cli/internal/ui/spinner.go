// Package ui provides terminal user interface components.
// This file provides loading spinner utilities for async operations.
package ui

import (
	"time"

	"github.com/briandowns/spinner"
)

// SpinnerType defines the style of spinner animation
type SpinnerType int

const (
	SpinnerDots SpinnerType = iota
	SpinnerLine
	SpinnerArrow
	SpinnerBounce
)

// spinnerCharsets maps SpinnerType to briandowns/spinner charset indices
var spinnerCharsets = map[SpinnerType]int{
	SpinnerDots:   14, // ⣾⣽⣻⢿⡿⣟⣯⣷
	SpinnerLine:   11, // ◐◓◑◒
	SpinnerArrow:  13, // ←↖↑↗→↘↓↙
	SpinnerBounce: 36, // ▁▂▃▄▅▆▇█▇▆▅▄▃▂
}

// Spinner wraps briandowns/spinner with CodeQuest styling
type Spinner struct {
	s       *spinner.Spinner
	message string
}

// NewSpinner creates a new styled spinner
func NewSpinner(message string, spinType SpinnerType) *Spinner {
	charset := spinnerCharsets[spinType]
	s := spinner.New(spinner.CharSets[charset], 100*time.Millisecond)
	s.Suffix = "  " + message
	s.Color("cyan")

	return &Spinner{
		s:       s,
		message: message,
	}
}

// Start begins the spinner animation
func (sp *Spinner) Start() {
	sp.s.Start()
}

// Stop halts the spinner and clears the line
func (sp *Spinner) Stop() {
	sp.s.Stop()
}

// Success stops the spinner and shows a success message
func (sp *Spinner) Success(msg string) {
	sp.s.Stop()
	if msg == "" {
		msg = sp.message
	}
	PrintSuccess(msg)
}

// Fail stops the spinner and shows an error message
func (sp *Spinner) Fail(msg string) {
	sp.s.Stop()
	if msg == "" {
		msg = sp.message
	}
	PrintError(msg)
}

// Update changes the spinner message
func (sp *Spinner) Update(msg string) {
	sp.s.Suffix = "  " + msg
	sp.message = msg
}

// WithSpinner runs a function with a spinner animation
func WithSpinner(msg string, fn func() error) error {
	sp := NewSpinner(msg, SpinnerDots)
	sp.Start()

	err := fn()

	if err != nil {
		sp.Fail(err.Error())
		return err
	}

	sp.Success("")
	return nil
}
