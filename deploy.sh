#!/bin/bash

# Deployment script for rangeleap.com to GitHub Pages

set -e

echo "=== RangeLeap Deployment Script ==="
echo

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not found. Install it from: https://cli.github.com/"
    exit 1
fi

# Check if we're authenticated
echo "🔍 Checking GitHub authentication..."
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated. Run 'gh auth login' to authenticate."
    exit 1
fi

echo "✅ Authenticated as $(gh api user | jq -r '.login')"
echo

# Create a fresh directory for GitHub Pages
echo "📁 Creating deployment directory..."
rm -rf deploy-pages
mkdir -p deploy-pages
cd deploy-pages

# Initialize git repository
echo "🌱 Initializing git repository..."
git init

# Configure git
git config user.name "$(gh api user | jq -r '.name')"
git config user.email "$(gh api user | jq -r '.email')"

# Add remote repository
echo "🔗 Adding GitHub remote..."
git remote add origin https://github.com/jzheng01/rangeleap.git

# Pull any existing content (in case there's a CNAME file)
echo "📥 Pulling existing GitHub Pages content..."
git fetch origin gh-pages || true
git checkout -b gh-pages origin/gh-pages 2>/dev/null || git checkout -b gh-pages

# Copy the built static files
echo "📤 Copying static files..."
cp -r ../out/* .

# Create/update CNAME file (if doesn't exist)
if [ ! -f CNAME ]; then
    echo "rangeleap.com" > CNAME
    echo "📄 Created CNAME file for custom domain"
fi

# Commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Deploy static site $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub Pages
echo "🚀 Pushing to GitHub Pages..."
git push origin gh-pages --force

echo "🎉 Deployment complete!"
echo "🔗 Your site will be available at: https://rangeleap.com"
echo "⏳ Note: DNS changes may take up to 24 hours to propagate"

# Clean up
echo "🧹 Cleaning up..."
cd ..
rm -rf deploy-pages

echo "✅ Done!"