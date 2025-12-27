// Package crypto provides verification utilities.
// This file handles session and output verification.
package crypto

import (
	"fmt"
	"time"
)

// Session represents a test session for verification
type Session struct {
	ID           string    `json:"session_id"`
	MissionID    string    `json:"mission_id"`
	ExpectedHash string    `json:"expected_hash,omitempty"`
	ExpiresAt    time.Time `json:"expires_at"`
	CreatedAt    time.Time `json:"created_at"`
}

// SessionValidator validates session properties
type SessionValidator struct {
	maxAge       time.Duration
	clockSkew    time.Duration
	allowExpired bool
}

// NewSessionValidator creates a new session validator with defaults
func NewSessionValidator() *SessionValidator {
	return &SessionValidator{
		maxAge:    30 * time.Minute,
		clockSkew: 5 * time.Minute,
	}
}

// WithMaxAge sets the maximum session age
func (v *SessionValidator) WithMaxAge(d time.Duration) *SessionValidator {
	v.maxAge = d
	return v
}

// AllowExpired allows expired sessions (for debugging)
func (v *SessionValidator) AllowExpired() *SessionValidator {
	v.allowExpired = true
	return v
}

// ValidateSession checks if a session is valid
func (v *SessionValidator) ValidateSession(s *Session) error {
	if s.ID == "" {
		return fmt.Errorf("session ID is required")
	}

	if s.MissionID == "" {
		return fmt.Errorf("mission ID is required")
	}

	if !v.allowExpired {
		now := time.Now()
		adjustedExpiry := s.ExpiresAt.Add(v.clockSkew)

		if now.After(adjustedExpiry) {
			return fmt.Errorf("session expired at %s (current time: %s)",
				s.ExpiresAt.Format(time.RFC3339),
				now.Format(time.RFC3339))
		}
	}

	age := time.Since(s.CreatedAt)
	if age > v.maxAge+v.clockSkew {
		return fmt.Errorf("session too old (age: %s, max: %s)", age, v.maxAge)
	}

	return nil
}

// VerifyResult represents the outcome of a verification
type VerifyResult struct {
	Valid   bool
	Message string
	Details map[string]interface{}
}

// VerifyOutputHash verifies that the computed hash matches the expected hash
func VerifyOutputHash(computed, expected string) *VerifyResult {
	if computed == "" {
		return &VerifyResult{Valid: false, Message: "computed hash is empty"}
	}

	if expected == "" {
		return &VerifyResult{Valid: false, Message: "expected hash is empty"}
	}

	if !VerifyHash(computed, expected) {
		return &VerifyResult{
			Valid:   false,
			Message: "hash mismatch - test outputs do not match expected results",
			Details: map[string]interface{}{
				"computed_prefix": computed[:16] + "...",
				"expected_prefix": expected[:16] + "...",
			},
		}
	}

	return &VerifyResult{Valid: true, Message: "verification successful"}
}

// GenerateSessionToken creates a unique session identifier
func GenerateSessionToken() string {
	timestamp := time.Now().UnixNano()
	random := HashString(fmt.Sprintf("%d", timestamp))[:16]
	return fmt.Sprintf("%x%s", timestamp, random)
}
