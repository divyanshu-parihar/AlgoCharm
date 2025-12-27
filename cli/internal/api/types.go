// Package api provides types for API requests and responses.
package api

import "time"

// ============================================================================
// Authentication Types
// ============================================================================

// ValidateRequest is the request to validate an API key
type ValidateRequest struct {
	APIKey string `json:"api_key"`
}

// ValidateResponse is the response from API key validation
type ValidateResponse struct {
	Valid    bool   `json:"valid"`
	Username string `json:"username,omitempty"`
	Email    string `json:"email,omitempty"`
	Error    string `json:"error,omitempty"`
}

// ============================================================================
// Mission Types
// ============================================================================

// Mission represents a coding challenge/exercise
type Mission struct {
	ID           string            `json:"id"`
	Title        string            `json:"title"`
	Description  string            `json:"description"`
	Difficulty   string            `json:"difficulty"`
	XPReward     int               `json:"xp_reward"`
	InputType    string            `json:"input_type,omitempty"`
	OutputType   string            `json:"output_type,omitempty"`
	FunctionName string            `json:"function_name,omitempty"`
	Examples     string            `json:"examples,omitempty"`
	StarterCode  map[string]string `json:"starter_code"`
}

// MissionResponse is the response from fetching a mission
type MissionResponse struct {
	Mission Mission `json:"mission"`
	Error   string  `json:"error,omitempty"`
}

// ============================================================================
// Challenge/Test Session Types
// ============================================================================

// TestCase represents a single test case
type TestCase struct {
	ID       int         `json:"id"`
	Name     string      `json:"name,omitempty"`
	Category string      `json:"category,omitempty"`
	Input    interface{} `json:"input"`
	Expected interface{} `json:"expected,omitempty"`
	IsPublic bool        `json:"is_public,omitempty"`
}

// ChallengeRequest is the request to start a test session
type ChallengeRequest struct {
	MissionID string `json:"mission_id"`
	APIKey    string `json:"api_key"`
}

// ChallengeResponse is the response containing the test session
type ChallengeResponse struct {
	SessionID  string     `json:"session_id"`
	ExerciseID string     `json:"exercise_id"`
	TestCases  []TestCase `json:"inputs"`
	ExpiresAt  time.Time  `json:"expires_at"`
	Error      string     `json:"error,omitempty"`
}

// ============================================================================
// Submission Types
// ============================================================================

// TestOutput represents the output from running a single test case
type TestOutput struct {
	ID      int         `json:"id"`
	Output  interface{} `json:"output"`
	Time    float64     `json:"time_ms,omitempty"`
	Success bool        `json:"success"`
	Error   string      `json:"error,omitempty"`
}

// SubmitRequest is the request to submit test results
type SubmitRequest struct {
	SessionID   string       `json:"session_id"`
	APIKey      string       `json:"api_key"`
	Outputs     []TestOutput `json:"outputs"`
	OutputsHash string       `json:"outputs_hash"`
}

// SubmitResponse is the response from a submission
type SubmitResponse struct {
	Success   bool   `json:"success"`
	Message   string `json:"message"`
	XPAwarded int    `json:"xp_awarded,omitempty"`
	NewTotal  int    `json:"new_total,omitempty"`
	Error     string `json:"error,omitempty"`
}

// ============================================================================
// User Types
// ============================================================================

// UserProfile represents the user's profile information
type UserProfile struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Email    string `json:"email"`
	Level    int    `json:"level"`
	XP       int    `json:"xp"`
	APIKey   string `json:"api_key"`
}

// ============================================================================
// Session State (Local Storage)
// ============================================================================

// LocalSession represents the locally-saved test session state
type LocalSession struct {
	SessionID  string       `json:"session_id"`
	MissionID  string       `json:"mission_id"`
	Outputs    []TestOutput `json:"outputs"`
	OutputHash string       `json:"output_hash"`
	ExpiresAt  time.Time    `json:"expires_at"`
	CreatedAt  time.Time    `json:"created_at"`
}

// IsExpired checks if the session has expired
func (s *LocalSession) IsExpired() bool {
	return time.Now().After(s.ExpiresAt)
}
