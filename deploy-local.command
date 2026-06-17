#!/bin/bash
# COYOTE Campus — Local Docker Deployment Script
# Double-click this file to build and run the app at http://localhost:3000

set -e
cd "$(dirname "$0")"

echo ""
echo "================================================"
echo "  COYOTE Campus — Local Docker Deployment"
echo "================================================"
echo ""

# Check Docker is running
if ! docker info > /dev/null 2>&1; then
  echo "❌ Docker is not running. Please start Docker Desktop and try again."
  exit 1
fi

echo "✅ Docker is running."
echo ""

# Stop & remove any existing container
if docker ps -a --format '{{.Names}}' | grep -q '^coyote-campus$'; then
  echo "🔄 Stopping existing container..."
  docker compose down
fi

# Clean stale Next.js cache (fixes blank page issue)
echo "🧹 Clearing Next.js cache..."
rm -rf .next

echo ""
echo "🔨 Building Docker image (this takes ~2-3 minutes)..."
echo ""
docker compose up --build -d

echo ""
echo "================================================"
echo "  ✅ COYOTE Campus is running!"
echo "  🌐 Open: http://localhost:3000"
echo "  🐾 Little Paws: http://localhost:3000/little-paws"
echo ""
echo "  To stop: docker compose down"
echo "================================================"
echo ""

# Open browser
sleep 3
open http://localhost:3000
