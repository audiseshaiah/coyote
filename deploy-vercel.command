#!/bin/bash
# COYOTE Campus — Deploy to Vercel (Production)
cd "$(dirname "$0")"

echo ""
echo "================================================"
echo "  COYOTE Campus — Deploying to Vercel..."
echo "================================================"
echo ""

# Check if vercel CLI is available
if ! npx vercel --version > /dev/null 2>&1; then
  echo "❌ Vercel CLI not found. Installing..."
  npm install -g vercel
fi

echo "🔐 Logging in to Vercel..."
echo ""
npx vercel login

echo ""
echo "🚀 Deploying to Vercel production..."
echo ""
npx vercel --prod

echo ""
echo "✅ Deployment complete!"
echo ""
