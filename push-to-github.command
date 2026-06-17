#!/bin/bash
# COYOTE Campus — Login to GitHub + Push
cd "$(dirname "$0")"

echo ""
echo "================================================"
echo "  COYOTE Campus — GitHub Login & Push"
echo "================================================"
echo ""

REMOTE_URL="https://github.com/audiseshaiah/coyote.git"

# --- Step 1: GitHub Login ---
if command -v gh &> /dev/null; then
  echo "🔐 Logging in to GitHub via browser..."
  gh auth login --web --git-protocol https
else
  echo "⚠️  GitHub CLI (gh) not found. Trying Homebrew install..."
  if command -v brew &> /dev/null; then
    brew install gh
    echo "🔐 Logging in to GitHub via browser..."
    gh auth login --web --git-protocol https
  else
    echo ""
    echo "ℹ️  No GitHub CLI available."
    echo "    When prompted during push, enter:"
    echo "    Username: audiseshaiah"
    echo "    Password: your GitHub Personal Access Token"
    echo "    (Generate at: https://github.com/settings/tokens)"
    echo ""
  fi
fi

# --- Step 2: Initialize git if needed ---
if [ ! -d ".git" ]; then
  echo ""
  echo "📁 Initializing git repository..."
  git init
  git branch -M main
fi

# --- Step 3: Set remote ---
if git remote | grep -q "^origin$"; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

# --- Step 4: Stage + Commit ---
echo ""
echo "📦 Staging all files..."
git add .

echo "💾 Committing..."
git commit -m "COYOTE campus website - full content update with pricing tables" 2>/dev/null || echo "(nothing new to commit)"

# --- Step 5: Push ---
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Done! https://github.com/audiseshaiah/coyote"
echo ""
