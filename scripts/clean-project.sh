#!/bin/bash
echo "🧹 Cleaning project caches..."
rm -rf .next
rm -rf out
rm -rf node_modules/.cache
echo "✨ Project cleaned! Now run 'pnpm install' and 'pnpm dev'"
