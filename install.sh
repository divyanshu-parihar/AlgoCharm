#!/bin/bash
# Charm CLI Installer
# Usage: curl -sSL https://raw.githubusercontent.com/divyanshu-parihar/AlgoCharm/main/install.sh | bash

set -e

REPO="divyanshu-parihar/AlgoCharm"
INSTALL_DIR="/usr/local/bin"
BINARY_NAME="charm"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_banner() {
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║${NC}   ▓▓▓ CHARM CLI INSTALLER ▓▓▓   Master Algorithms         ${GREEN}║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════╝${NC}"
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
    
    echo -e "${YELLOW}Detected platform: ${OS}-${ARCH}${NC}"
}

get_latest_release() {
    LATEST_URL="https://api.github.com/repos/${REPO}/releases/latest"
    
    if command -v curl &> /dev/null; then
        RELEASE_INFO=$(curl -sL "$LATEST_URL")
    elif command -v wget &> /dev/null; then
        RELEASE_INFO=$(wget -qO- "$LATEST_URL")
    else
        echo -e "${RED}Error: curl or wget is required${NC}"
        exit 1
    fi
    
    # Extract download URL for our platform
    DOWNLOAD_URL=$(echo "$RELEASE_INFO" | grep -o "https://[^\"]*charm-${OS}-${ARCH}[^\"]*" | head -1)
    
    if [ -z "$DOWNLOAD_URL" ]; then
        echo -e "${RED}Could not find release for ${OS}-${ARCH}${NC}"
        echo -e "${YELLOW}Available releases:${NC}"
        echo "$RELEASE_INFO" | grep -o '"name": "charm-[^"]*"' | head -10
        exit 1
    fi
    
    echo -e "${GREEN}Found release: ${DOWNLOAD_URL}${NC}"
}

download_and_install() {
    echo -e "${YELLOW}Downloading charm CLI...${NC}"
    
    TMP_DIR=$(mktemp -d)
    TMP_FILE="${TMP_DIR}/${BINARY_NAME}"
    
    if command -v curl &> /dev/null; then
        curl -sL "$DOWNLOAD_URL" -o "$TMP_FILE"
    else
        wget -q "$DOWNLOAD_URL" -O "$TMP_FILE"
    fi
    
    chmod +x "$TMP_FILE"
    
    # Check if we can write to install dir
    if [ -w "$INSTALL_DIR" ]; then
        mv "$TMP_FILE" "${INSTALL_DIR}/${BINARY_NAME}"
    else
        echo -e "${YELLOW}Requesting sudo access to install to ${INSTALL_DIR}...${NC}"
        sudo mv "$TMP_FILE" "${INSTALL_DIR}/${BINARY_NAME}"
    fi
    
    rm -rf "$TMP_DIR"
}

verify_installation() {
    if command -v charm &> /dev/null; then
        echo ""
        echo -e "${GREEN}✓ Charm CLI installed successfully!${NC}"
        echo ""
        echo -e "Run ${YELLOW}charm --help${NC} to get started."
        echo ""
    else
        echo -e "${YELLOW}Charm installed but not in PATH.${NC}"
        echo -e "Add ${INSTALL_DIR} to your PATH, or run:"
        echo -e "  ${YELLOW}${INSTALL_DIR}/${BINARY_NAME} --help${NC}"
    fi
}

main() {
    print_banner
    detect_platform
    get_latest_release
    download_and_install
    verify_installation
}

main
