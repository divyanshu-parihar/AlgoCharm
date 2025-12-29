// Package api provides the HTTP client for communicating with the CodeQuest server.
// It handles authentication, retries, timeouts, and response parsing.
package api

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

const (
	// DefaultTimeout is the default HTTP timeout
	DefaultTimeout = 30 * time.Second

	// DefaultRetries is the default number of retry attempts
	DefaultRetries = 3

	// DefaultServerURL is the default API server
	DefaultServerURL = "https://charm.workbuzz.me"
)

// Client is the HTTP client for the CodeQuest API
type Client struct {
	baseURL    string
	apiKey     string
	httpClient *http.Client
	debug      bool
}

// ClientOption configures the API client
type ClientOption func(*Client)

// WithBaseURL sets the server base URL
func WithBaseURL(url string) ClientOption {
	return func(c *Client) {
		c.baseURL = url
	}
}

// WithAPIKey sets the authentication API key
func WithAPIKey(key string) ClientOption {
	return func(c *Client) {
		c.apiKey = key
	}
}

// WithTimeout sets the HTTP timeout
func WithTimeout(d time.Duration) ClientOption {
	return func(c *Client) {
		c.httpClient.Timeout = d
	}
}

// WithDebug enables debug logging
func WithDebug(enabled bool) ClientOption {
	return func(c *Client) {
		c.debug = enabled
	}
}

// NewClient creates a new API client with the given options
func NewClient(opts ...ClientOption) *Client {
	c := &Client{
		baseURL: DefaultServerURL,
		httpClient: &http.Client{
			Timeout: DefaultTimeout,
		},
	}

	for _, opt := range opts {
		opt(c)
	}

	return c
}

// SetAPIKey updates the API key (used after login)
func (c *Client) SetAPIKey(key string) {
	c.apiKey = key
}

// request makes an HTTP request with retries and error handling
func (c *Client) request(method, path string, body interface{}, result interface{}) error {
	url := c.baseURL + path

	var bodyReader io.Reader
	if body != nil {
		bodyBytes, err := json.Marshal(body)
		if err != nil {
			return fmt.Errorf("failed to encode request body: %w", err)
		}
		bodyReader = bytes.NewReader(bodyBytes)
	}

	var lastErr error
	for attempt := 0; attempt < DefaultRetries; attempt++ {
		req, err := http.NewRequest(method, url, bodyReader)
		if err != nil {
			return fmt.Errorf("failed to create request: %w", err)
		}

		// Set headers
		req.Header.Set("Content-Type", "application/json")
		req.Header.Set("User-Agent", "CodeQuest-CLI/1.0")

		// Add API key if available
		if c.apiKey != "" {
			req.Header.Set("X-API-Key", c.apiKey)
		}

		// Debug logging
		if c.debug {
			fmt.Printf("[DEBUG] %s %s\n", method, url)
		}

		resp, err := c.httpClient.Do(req)
		if err != nil {
			lastErr = err
			// Exponential backoff
			time.Sleep(time.Duration(attempt+1) * 500 * time.Millisecond)
			continue
		}
		defer resp.Body.Close()

		// Read response body
		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			return fmt.Errorf("failed to read response: %w", err)
		}

		if c.debug {
			fmt.Printf("[DEBUG] Response (%d): %s\n", resp.StatusCode, string(respBody))
		}

		// Handle non-success status codes
		if resp.StatusCode >= 400 {
			var apiErr APIError
			if json.Unmarshal(respBody, &apiErr) == nil && apiErr.ErrorMsg != "" {
				return &apiErr
			}
			return fmt.Errorf("API error (%d): %s", resp.StatusCode, string(respBody))
		}

		// Parse response
		if result != nil {
			if err := json.Unmarshal(respBody, result); err != nil {
				return fmt.Errorf("failed to decode response: %w", err)
			}
		}

		return nil
	}

	return fmt.Errorf("request failed after %d attempts: %w", DefaultRetries, lastErr)
}

// Get performs a GET request
func (c *Client) Get(path string, result interface{}) error {
	return c.request(http.MethodGet, path, nil, result)
}

// Post performs a POST request
func (c *Client) Post(path string, body interface{}, result interface{}) error {
	return c.request(http.MethodPost, path, body, result)
}

// APIError represents an error response from the API
type APIError struct {
	ErrorMsg string `json:"error"`
	Message  string `json:"message,omitempty"`
	Code     string `json:"code,omitempty"`
}

func (e *APIError) Error() string {
	if e.Message != "" {
		return e.Message
	}
	return e.ErrorMsg
}
