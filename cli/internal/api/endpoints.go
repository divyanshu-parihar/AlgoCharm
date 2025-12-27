// Package api provides endpoint definitions for the CodeQuest API.
package api

import (
	"fmt"
	"net/url"
)

// API endpoint paths
const (
	EndpointValidate  = "/api/auth/validate"
	EndpointMission   = "/api/mission"
	EndpointChallenge = "/api/challenge"
	EndpointSubmit    = "/api/submit"
	EndpointProfile   = "/api/user/profile"
)

// ============================================================================
// API Methods
// ============================================================================

// ValidateAPIKey checks if an API key is valid
func (c *Client) ValidateAPIKey(apiKey string) (*ValidateResponse, error) {
	path := fmt.Sprintf("%s?api_key=%s", EndpointValidate, url.QueryEscape(apiKey))

	var resp ValidateResponse
	if err := c.Get(path, &resp); err != nil {
		return nil, err
	}

	return &resp, nil
}

// GetMission fetches mission details by ID
func (c *Client) GetMission(missionID string) (*Mission, error) {
	path := fmt.Sprintf("%s?id=%s", EndpointMission, url.QueryEscape(missionID))

	// API returns mission directly, not wrapped in {mission: ...}
	var resp Mission
	if err := c.Get(path, &resp); err != nil {
		return nil, err
	}

	// Check if we got an empty response (mission not found)
	if resp.ID == "" {
		return nil, fmt.Errorf("mission not found: %s", missionID)
	}

	return &resp, nil
}

// GetChallenge starts a new test session for a mission
func (c *Client) GetChallenge(missionID, apiKey string) (*ChallengeResponse, error) {
	path := fmt.Sprintf("%s?mission_id=%s&api_key=%s",
		EndpointChallenge,
		url.QueryEscape(missionID),
		url.QueryEscape(apiKey),
	)

	var resp ChallengeResponse
	if err := c.Get(path, &resp); err != nil {
		return nil, err
	}

	if resp.Error != "" {
		return nil, fmt.Errorf("%s", resp.Error)
	}

	return &resp, nil
}

// Submit submits test results for verification
func (c *Client) Submit(req *SubmitRequest) (*SubmitResponse, error) {
	var resp SubmitResponse
	if err := c.Post(EndpointSubmit, req, &resp); err != nil {
		return nil, err
	}

	return &resp, nil
}

// GetProfile fetches the current user's profile
func (c *Client) GetProfile() (*UserProfile, error) {
	var resp UserProfile
	if err := c.Get(EndpointProfile, &resp); err != nil {
		return nil, err
	}

	return &resp, nil
}
