// Package runner provides code execution utilities for different languages.
// It defines the Runner interface and common functionality.
package runner

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"time"
)

// DefaultTimeout is the default execution timeout per test case
const DefaultTimeout = 30 * time.Second

// Runner defines the interface for language-specific code runners
type Runner interface {
	// Language returns the human-readable language name
	Language() string

	// Extension returns the file extension for solution files
	Extension() string

	// Detect checks if this runner should handle the given directory
	Detect(dir string) bool

	// Prepare prepares the solution for execution (e.g., compile)
	Prepare(ctx context.Context, dir string) error

	// Run executes the solution with the given input
	Run(ctx context.Context, dir string, input []byte) ([]byte, error)

	// Cleanup cleans up any temporary files
	Cleanup(dir string) error
}

// Result represents the result of running a single test case
type Result struct {
	ID          int         `json:"id"`
	Success     bool        `json:"success"`
	Output      interface{} `json:"output"`
	Error       string      `json:"error,omitempty"`
	ExecutionMs float64     `json:"execution_ms"`
}

// ExecuteTests runs all test cases against a solution and returns results
func ExecuteTests(ctx context.Context, r Runner, dir string, testCases []TestCase) ([]Result, error) {
	results := make([]Result, len(testCases))

	if err := r.Prepare(ctx, dir); err != nil {
		return nil, fmt.Errorf("failed to prepare %s solution: %w", r.Language(), err)
	}

	for i, tc := range testCases {
		result := Result{ID: tc.ID}

		inputJSON, err := json.Marshal(tc.Input)
		if err != nil {
			result.Error = fmt.Sprintf("failed to encode input: %v", err)
			results[i] = result
			continue
		}

		start := time.Now()
		output, err := r.Run(ctx, dir, inputJSON)
		result.ExecutionMs = float64(time.Since(start).Microseconds()) / 1000.0

		if err != nil {
			result.Error = err.Error()
			results[i] = result
			continue
		}

		var outputVal interface{}
		if err := json.Unmarshal(output, &outputVal); err != nil {
			outputVal = string(output)
		}

		result.Output = outputVal
		result.Success = true
		results[i] = result
	}

	return results, nil
}

// TestCase represents a test case for execution
type TestCase struct {
	ID       int         `json:"id"`
	Input    interface{} `json:"input"`
	Expected interface{} `json:"expected,omitempty"`
	Name     string      `json:"name,omitempty"`
}

// runCommand executes a command with the given input and returns output
func runCommand(ctx context.Context, dir string, input []byte, name string, args ...string) ([]byte, error) {
	cmd := exec.CommandContext(ctx, name, args...)
	cmd.Dir = dir

	if input != nil {
		cmd.Stdin = bytes.NewReader(input)
	}

	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr

	if err := cmd.Run(); err != nil {
		if stderr.Len() > 0 {
			return nil, fmt.Errorf("%s: %s", err.Error(), stderr.String())
		}
		return nil, err
	}

	return bytes.TrimSpace(stdout.Bytes()), nil
}

// DetectRunner finds the appropriate runner for a directory
func DetectRunner(dir string) (Runner, error) {
	runners := []Runner{
		NewGoRunner(),
		NewTypeScriptRunner(),
		NewCppRunner(),
	}

	for _, r := range runners {
		if r.Detect(dir) {
			return r, nil
		}
	}

	return nil, fmt.Errorf("no supported solution file found in %s", dir)
}

// fileExists checks if a file exists
func fileExists(path string) bool {
	_, err := os.Stat(path)
	return err == nil
}
