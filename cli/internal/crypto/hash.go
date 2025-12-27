// Package crypto provides cryptographic utilities for the CodeQuest CLI.
// It handles SHA256 hashing of test outputs for secure verification.
package crypto

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"sort"
)

// TestOutput represents a single test output for hashing
type TestOutput struct {
	ID     int         `json:"id"`
	Output interface{} `json:"output"`
}

// HashOutputs creates a SHA256 hash of test outputs.
// Outputs are sorted by ID to ensure consistent hashing regardless of order.
func HashOutputs(outputs []TestOutput) (string, error) {
	if len(outputs) == 0 {
		return "", fmt.Errorf("no outputs to hash")
	}

	// Sort outputs by ID to ensure consistent ordering
	sorted := make([]TestOutput, len(outputs))
	copy(sorted, outputs)
	sort.Slice(sorted, func(i, j int) bool {
		return sorted[i].ID < sorted[j].ID
	})

	// Extract just the output values in order
	values := make([]interface{}, len(sorted))
	for i, o := range sorted {
		values[i] = o.Output
	}

	// JSON encode the values
	data, err := json.Marshal(values)
	if err != nil {
		return "", fmt.Errorf("failed to encode outputs: %w", err)
	}

	// Compute SHA256 hash
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:]), nil
}

// HashString creates a SHA256 hash of a string
func HashString(s string) string {
	hash := sha256.Sum256([]byte(s))
	return hex.EncodeToString(hash[:])
}

// VerifyHash checks if two hashes match (constant-time comparison)
func VerifyHash(computed, expected string) bool {
	if len(computed) != len(expected) {
		return false
	}

	// Constant-time comparison to prevent timing attacks
	result := 0
	for i := 0; i < len(computed); i++ {
		result |= int(computed[i]) ^ int(expected[i])
	}
	return result == 0
}

// HashMultiple creates a combined hash from multiple inputs
func HashMultiple(inputs ...string) string {
	hasher := sha256.New()
	for _, input := range inputs {
		hasher.Write([]byte(input))
		hasher.Write([]byte{0}) // Separator to prevent collision
	}
	return hex.EncodeToString(hasher.Sum(nil))
}
