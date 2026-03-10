#!/bin/bash

# Qwen Agents Toolpack Installation Script
# This script installs the Qwen CLI extension for the agents toolpack

set -e  # Exit on any error

echo "Qwen Agents Toolpack Installation Script"
echo "========================================"

# Check if qwen CLI is installed
if ! command -v qwen &> /dev/null; then
    echo "Error: qwen CLI is not installed."
    echo "Please install Qwen CLI first: https://github.com/qwen-ai/qwen-cli"
    exit 1
fi

echo "Qwen CLI found. Proceeding with installation..."

# Navigate to the script's directory to ensure relative paths work correctly
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Installing Qwen extension from: $(pwd)/qwen-extension"
qwen extensions install ./qwen-extension

echo ""
echo "Installation completed successfully!"
echo ""
echo "To verify the installation, run:"
echo "  qwen --help"
echo "You should see new commands: agents-list, agents-install, agents-info, agents-use, tools-run"
echo ""
echo "To list available agents, run:"
echo "  qwen agents-list"
echo ""