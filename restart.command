#!/bin/bash
# COYOTE Campus — Restart Script
cd "$(dirname "$0")"

echo ""
echo "================================================"
echo "  COYOTE Campus — Restarting..."
echo "================================================"
echo ""

if ! docker info > /dev/null 2>&1; then
  echo "❌ Docker is not running. Please start Docker Desktop and try again."
  exit 1
fi

if docker ps --format '{{.Names}}' | grep -q '^coyote-campus$'; then
  echo "🔄 Restarting container..."
  docker compose restart
else
  echo "⚠️  Container not running. Starting fresh..."
  docker compose up -d
fi

echo ""
echo "✅ Done! Opening http://localhost:3000"
echo ""
sleep 2
open http://localhost:3000
