#!/bin/bash
# COYOTE Campus — Push to GitHub
cd "$(dirname "$0")"

echo ""
echo "================================================"
echo "  COYOTE Campus — Pushing to GitHub..."
echo "================================================"
echo ""

REMOTE_URL="https://github.com/audiseshaiah/coyote.git"

# Initialize git if not already a repo
if [ ! -d ".git" ]; then
  echo "📁 Initializing git repository..."
  git init
  git branch -M main
fi

# Set remote (add or update)
if git remote | grep -q "^origin$"; then
  echo "🔗 Updating remote origin..."
  git remote set-url origin "$REMOTE_URL"
else
  echo "🔗 Adding remote origin..."
  git remote add origin "$REMOTE_URL"
fi

# Stage all files
echo ""
echo "📦 Staging files..."
git add .

# Commit
echo ""
echo "💾 Committing..."
git commit -m "COYOTE campus website - full content update with pricing tables"

# Push
echo ""
echo "🚀 Pushing to GitHub (main)..."
git push -u origin main

echo ""
echo "✅ Done! Code pushed to https://github.com/audiseshaiah/coyote"
echo ""
