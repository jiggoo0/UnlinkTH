#!/bin/bash

# ==============================================================================
# PROJECT: www.aemdevweb.com / UNLINK-TH
# DESCRIPTION: Development Environment Reset Script (Purge & Reinstall)
# VERSION: 2.1.0 (2026-01-22)
# ==============================================================================

# Define Colors for Output
BLUE='\033[0;34m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Helper for Logging
log_info() { printf "${BLUE}[INFO] %s${NC}\n" "$1"; }
log_success() { printf "${GREEN}[DONE] %s${NC}\n" "$1"; }
log_error() { printf "${RED}[ERROR] %s${NC}\n" "$1"; }

log_info "Initiating System Purge for Unlink TH..."

# 1. Verification: Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    log_error "pnpm could not be found. Please install pnpm before running this script."
    exit 1
fi

# 2. Cleanup: Remove Build Artifacts & Cache
log_info "Clearing build artifacts (.next, .turbo)..."
rm -rf .next
rm -rf .turbo

# 3. Cleanup: Remove Dependencies & Lockfile
log_info "Purging node_modules and lockfiles..."
rm -rf node_modules
rm -f pnpm-lock.yaml

# 4. Cleanup: pnpm store prune (Optional but recommended for deep clean)
log_info "Pruning pnpm store cache..."
pnpm store prune

# 5. Installation: Fresh Install
log_info "Re-installing dependencies with pnpm..."
if pnpm install; then
    log_success "Dependencies installed successfully."
else
    log_error "Installation failed. Please check your network or package.json."
    exit 1
fi

# 6. Finalization: Start Development Server
log_success "System state is clean and ready."
log_info "Launching development server..."
pnpm run dev
