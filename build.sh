#!/bin/bash

# Qwen Agents Toolpack Build Script
# This script builds the Qwen CLI extension from the source files

set -e  # Exit on any error

echo "Qwen Agents Toolpack Build Script"
echo "================================="

# Navigate to the script's directory to ensure relative paths work correctly
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Building Qwen extension..."

# Clean previous build artifacts
if [ -d "qwen-extension/dist" ]; then
    rm -rf qwen-extension/dist
fi

# Create necessary directories if they don't exist
mkdir -p qwen-extension/src/commands
mkdir -p qwen-extension/src/tools
mkdir -p qwen-extension/src/agents

# Run the conversion scripts to generate the Qwen-compatible files
echo "Running conversion scripts..."

# Convert all commands
if [ -f "convert-all-commands.js" ]; then
    echo "Converting commands..."
    node convert-all-commands.js
fi

# Convert all agents
if [ -f "convert-all-agents.js" ]; then
    echo "Converting agents..."
    node convert-all-agents.js
fi

# Convert all skills
if [ -f "convert-all-skills.js" ]; then
    echo "Converting skills..."
    node convert-all-skills.js
fi

# Copy the extension files to the dist directory
echo "Copying extension files..."

# Create the extension structure
mkdir -p qwen-extension/src/commands
mkdir -p qwen-extension/src/tools
mkdir -p qwen-extension/src/agents

# Copy any existing extension files if they exist
if [ -d "qwen-extension-src" ]; then
    cp -r qwen-extension-src/* qwen-extension/src/ 2>/dev/null || true
fi

# Update package.json to reflect the current build
if [ -f "qwen-cli-package.json" ]; then
    cp qwen-cli-package.json qwen-extension/package.json
else
    # Create a default package.json if it doesn't exist
    cat > qwen-extension/package.json << EOF
{
  "name": "@qwen-agents/agents-toolpack",
  "version": "1.0.0",
  "description": "Qwen CLI extension for 65+ agent plugins with 152+ specialized agents, 61+ tools, and 71+ commands",
  "main": "src/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "qwen",
    "cli",
    "extension",
    "agents",
    "tools",
    "commands"
  ],
  "author": "Qwen Agents Team",
  "license": "MIT",
  "qwen": {
    "type": "extension",
    "commands": [
      "src/commands/"
    ],
    "tools": [
      "src/tools/"
    ],
    "agents": [
      "src/agents/"
    ]
  }
}
EOF
fi

echo ""
echo "Build completed successfully!"
echo "Extension is ready in: $(pwd)/qwen-extension"
echo ""
echo "To install the extension, run:"
echo "  ./install.sh"
echo ""