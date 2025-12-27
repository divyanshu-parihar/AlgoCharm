// Package runner provides TypeScript code execution.
package runner

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

// TypeScriptRunner executes TypeScript solutions
type TypeScriptRunner struct {
	useBun bool
}

// NewTypeScriptRunner creates a new TypeScript runner
func NewTypeScriptRunner() *TypeScriptRunner {
	return &TypeScriptRunner{
		useBun: commandExists("bun"),
	}
}

// Language returns the language name
func (r *TypeScriptRunner) Language() string {
	return "TypeScript"
}

// Extension returns the file extension
func (r *TypeScriptRunner) Extension() string {
	return ".ts"
}

// Detect checks for TypeScript solution files
func (r *TypeScriptRunner) Detect(dir string) bool {
	return fileExists(filepath.Join(dir, "solution.ts"))
}

// Prepare checks that the runner files exist
func (r *TypeScriptRunner) Prepare(ctx context.Context, dir string) error {
	runnerPath := filepath.Join(dir, "runner.ts")
	if !fileExists(runnerPath) {
		runnerCode := `import { solve } from './solution';

async function main() {
  const chunks: Buffer[] = [];
  process.stdin.on('data', (chunk) => chunks.push(chunk));
  await new Promise<void>((resolve) => process.stdin.on('end', resolve));
  const input = JSON.parse(Buffer.concat(chunks).toString());
  const output = solve(input);
  console.log(JSON.stringify(output));
}

main();
`
		if err := os.WriteFile(runnerPath, []byte(runnerCode), 0644); err != nil {
			return fmt.Errorf("failed to create runner.ts: %w", err)
		}
	}

	return nil
}

// Run executes the TypeScript solution
func (r *TypeScriptRunner) Run(ctx context.Context, dir string, input []byte) ([]byte, error) {
	runnerPath := filepath.Join(dir, "runner.ts")

	var cmd string
	var args []string

	if r.useBun {
		cmd = "bun"
		args = []string{"run", runnerPath}
	} else {
		if commandExists("ts-node") {
			cmd = "ts-node"
			args = []string{runnerPath}
		} else {
			cmd = "npx"
			args = []string{"ts-node", runnerPath}
		}
	}

	return runCommand(ctx, dir, input, cmd, args...)
}

// Cleanup is a no-op for TypeScript
func (r *TypeScriptRunner) Cleanup(dir string) error {
	return nil
}

// commandExists checks if a command is available
func commandExists(name string) bool {
	_, err := exec.LookPath(name)
	return err == nil
}
