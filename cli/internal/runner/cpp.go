// Package runner provides C++ code execution.
package runner

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
)

// CppRunner executes C++ solutions
type CppRunner struct {
	compiled bool
}

// NewCppRunner creates a new C++ runner
func NewCppRunner() *CppRunner {
	return &CppRunner{}
}

// Language returns the language name
func (r *CppRunner) Language() string {
	return "C++"
}

// Extension returns the file extension
func (r *CppRunner) Extension() string {
	return ".cpp"
}

// Detect checks for C++ solution files
func (r *CppRunner) Detect(dir string) bool {
	return fileExists(filepath.Join(dir, "solution.cpp"))
}

// Prepare compiles the C++ solution
func (r *CppRunner) Prepare(ctx context.Context, dir string) error {
	runnerPath := filepath.Join(dir, "runner.cpp")
	if !fileExists(runnerPath) {
		runnerCode := `#include <iostream>
#include <string>
#include "nlohmann/json.hpp"
#include "solution.cpp"

using json = nlohmann::json;

int main() {
    std::string input;
    std::getline(std::cin, input);
    json in = json::parse(input);
    json out = solve(in);
    std::cout << out.dump() << std::endl;
    return 0;
}
`
		if err := os.WriteFile(runnerPath, []byte(runnerCode), 0644); err != nil {
			return fmt.Errorf("failed to create runner.cpp: %w", err)
		}
	}

	binaryName := "solution"
	if runtime.GOOS == "windows" {
		binaryName = "solution.exe"
	}

	args := []string{"-std=c++17", "-O2", "-o", binaryName, "runner.cpp"}

	jsonInclude := filepath.Join(dir, "include")
	if fileExists(jsonInclude) {
		args = append([]string{"-I", jsonInclude}, args...)
	}

	_, err := runCommand(ctx, dir, nil, "g++", args...)
	if err != nil {
		return fmt.Errorf("compilation failed: %w", err)
	}

	r.compiled = true
	return nil
}

// Run executes the compiled C++ solution
func (r *CppRunner) Run(ctx context.Context, dir string, input []byte) ([]byte, error) {
	if !r.compiled {
		return nil, fmt.Errorf("solution not compiled - call Prepare first")
	}

	binaryName := "solution"
	if runtime.GOOS == "windows" {
		binaryName = "solution.exe"
	}

	binaryPath := filepath.Join(dir, binaryName)
	return runCommand(ctx, dir, input, binaryPath)
}

// Cleanup removes compiled binaries
func (r *CppRunner) Cleanup(dir string) error {
	binaryName := "solution"
	if runtime.GOOS == "windows" {
		binaryName = "solution.exe"
	}

	binaryPath := filepath.Join(dir, binaryName)
	if fileExists(binaryPath) {
		return os.Remove(binaryPath)
	}
	return nil
}
