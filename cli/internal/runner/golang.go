// Package runner provides Go language code execution.
package runner

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
)

// GoRunner executes Go solutions
type GoRunner struct {
	compiled    bool
	runnerAdded bool
}

// NewGoRunner creates a new Go runner
func NewGoRunner() *GoRunner {
	return &GoRunner{}
}

// Language returns the language name
func (r *GoRunner) Language() string {
	return "Go"
}

// Extension returns the file extension
func (r *GoRunner) Extension() string {
	return ".go"
}

// Detect checks for Go solution files
func (r *GoRunner) Detect(dir string) bool {
	return fileExists(filepath.Join(dir, "solution.go")) ||
		fileExists(filepath.Join(dir, "main.go"))
}

// runner code to inject into solution directory
const goRunnerCode = `package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	// Handle large inputs
	scanner.Buffer(make([]byte, 1024*1024), 1024*1024)
	scanner.Scan()
	var input interface{}
	json.Unmarshal(scanner.Bytes(), &input)
	
	output := Solve(input)
	
	result, _ := json.Marshal(output)
	fmt.Println(string(result))
}
`

// Prepare compiles the Go solution
func (r *GoRunner) Prepare(ctx context.Context, dir string) error {
	goMod := filepath.Join(dir, "go.mod")
	if !fileExists(goMod) {
		modName := filepath.Base(dir)
		content := fmt.Sprintf("module %s\n\ngo 1.21\n", modName)
		if err := os.WriteFile(goMod, []byte(content), 0644); err != nil {
			return fmt.Errorf("failed to create go.mod: %w", err)
		}
	}

	// Always create/overwrite main.go with the runner code
	mainPath := filepath.Join(dir, "main.go")
	if err := os.WriteFile(mainPath, []byte(goRunnerCode), 0644); err != nil {
		return fmt.Errorf("failed to create main.go: %w", err)
	}
	r.runnerAdded = true

	_, err := runCommand(ctx, dir, nil, "go", "build", "-o", "solution_bin", ".")
	if err != nil {
		return fmt.Errorf("compilation failed: %w", err)
	}

	r.compiled = true
	return nil
}

// Run executes the compiled Go solution
func (r *GoRunner) Run(ctx context.Context, dir string, input []byte) ([]byte, error) {
	if !r.compiled {
		return nil, fmt.Errorf("solution not compiled - call Prepare first")
	}

	binaryPath := filepath.Join(dir, "solution_bin")
	return runCommand(ctx, dir, input, binaryPath)
}

// Cleanup removes compiled binaries and runner file
func (r *GoRunner) Cleanup(dir string) error {
	binaryPath := filepath.Join(dir, "solution_bin")
	if fileExists(binaryPath) {
		os.Remove(binaryPath)
	}

	// Remove the main.go we added
	if r.runnerAdded {
		mainPath := filepath.Join(dir, "main.go")
		if fileExists(mainPath) {
			os.Remove(mainPath)
		}
	}
	return nil
}
