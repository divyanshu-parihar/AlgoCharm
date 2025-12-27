#!/bin/bash
# Charm CLI Installer for Private Repository
# Usage: ./install.sh
# 
# For private repos, users need to:
# 1. Have GitHub CLI (gh) installed and authenticated
# 2. Have access to the repository

set -e

REPO="divyanshu-parihar/AlgoCharm"
INSTALL_DIR="/usr/local/bin"
BINARY_NAME="charm"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

print_banner() {
    echo ""
    echo -e "${CYAN}   ██████╗██╗  ██╗ █████╗ ██████╗ ███╗   ███╗${NC}"
    echo -e "${CYAN}  ██╔════╝██║  ██║██╔══██╗██╔══██╗████╗ ████║${NC}"
    echo -e "${CYAN}  ██║     ███████║███████║██████╔╝██╔████╔██║${NC}"
    echo -e "${CYAN}  ██║     ██╔══██║██╔══██║██╔══██╗██║╚██╔╝██║${NC}"
    echo -e "${CYAN}  ╚██████╗██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║${NC}"
    echo -e "${CYAN}   ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝${NC}"
    echo ""
    echo -e "${GREEN}  Charm CLI Installer${NC}"
    echo ""
}

detect_platform() {
    OS=$(uname -s | tr '[:upper:]' '[:lower:]')
    ARCH=$(uname -m)
    
    case "$ARCH" in
        x86_64|amd64)
            ARCH="amd64"
            ;;
        arm64|aarch64)
            ARCH="arm64"
            ;;
        *)
            echo -e "${RED}Unsupported architecture: $ARCH${NC}"
            exit 1
            ;;
    esac

    case "$OS" in
        linux)
            OS="linux"
            ;;
        darwin)
            OS="darwin"
            ;;
        mingw*|msys*|cygwin*)
            OS="windows"
            BINARY_NAME="charm.exe"
            ;;
        *)
            echo -e "${RED}Unsupported operating system: $OS${NC}"
            exit 1
            ;;
    esac
    
    PATTERN="charm-${OS}-${ARCH}"
    echo -e "${YELLOW}Platform: ${OS}-${ARCH}${NC}"
}

check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        echo -e "${RED}GitHub CLI (gh) is required for private repository access.${NC}"
        echo ""
        echo -e "${YELLOW}Install GitHub CLI:${NC}"
        echo "  macOS:  brew install gh"
        echo "  Linux:  https://github.com/cli/cli#installation"
        echo ""
        echo -e "${YELLOW}Then authenticate:${NC}"
        echo "  gh auth login"
        echo ""
        exit 1
    fi
    
    # Check if authenticated
    if ! gh auth status &> /dev/null; then
        echo -e "${RED}GitHub CLI is not authenticated.${NC}"
        echo ""
        echo -e "${YELLOW}Run: gh auth login${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✓ GitHub CLI authenticated${NC}"
}

download_and_install() {
    echo -e "${YELLOW}Downloading ${PATTERN}...${NC}"
    
    TMP_DIR=$(mktemp -d)
    cd "$TMP_DIR"
    
    # Download using GitHub CLI
    if ! gh release download --repo "$REPO" --pattern "${PATTERN}*" 2>/dev/null; then
        echo -e "${RED}Failed to download release.${NC}"
        echo -e "${YELLOW}Make sure you have access to the repository and a release exists.${NC}"
        rm -rf "$TMP_DIR"
        exit 1
    fi
    
    # Find downloaded file
    DOWNLOADED_FILE=$(ls ${PATTERN}* 2>/dev/null | head -1)
    if [ -z "$DOWNLOADED_FILE" ]; then
        echo -e "${RED}Download failed - no matching file found.${NC}"
        rm -rf "$TMP_DIR"
        exit 1
    fi
    
    chmod +x "$DOWNLOADED_FILE"
    
    # Install
    if [ -w "$INSTALL_DIR" ]; then
        mv "$DOWNLOADED_FILE" "${INSTALL_DIR}/${BINARY_NAME}"
    else
        echo -e "${YELLOW}Requesting sudo access...${NC}"
        sudo mv "$DOWNLOADED_FILE" "${INSTALL_DIR}/${BINARY_NAME}"
    fi
    
    cd -
    rm -rf "$TMP_DIR"
}

verify_installation() {
    if command -v charm &> /dev/null; then
        echo ""
        echo -e "${GREEN}✓ Charm CLI installed successfully!${NC}"
        echo ""
        charm --version 2>/dev/null || echo "  Version: installed"
        echo ""
        echo -e "Run ${CYAN}charm --help${NC} to get started."
        echo ""
    else
        echo -e "${YELLOW}Charm installed to ${INSTALL_DIR}/${BINARY_NAME}${NC}"
        echo -e "Add ${INSTALL_DIR} to your PATH if not already."
    fi
}

main() {
    print_banner
    detect_platform
    check_gh_cli
    download_and_install
    verify_installation
}

main
