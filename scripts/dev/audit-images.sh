#!/bin/bash
# scripts/dev/audit-images.sh
# -------------------------------------------------------------------------
# UNLINK-TH | Image Audit Protocol
# Description: Checks for missing images referenced in code, and moves unused
# images from public/images/ to a backup folder.
# -------------------------------------------------------------------------

# Configuration
IMAGE_DIR="public/images"
BACKUP_DIR="_image_backups_$(date +%Y%m%d_%H%M%S)"
# Exclude directories where we shouldn't search for image references
SEARCH_DIRS="app components constants content lib config"

echo "🔍 Starting Image Audit Protocol..."
echo "------------------------------------------------------------"

# 1. Find all referenced images in the codebase
echo "📡 Scanning codebase for image references..."
# Use grep to extract matches like /images/filename.webp
# Only unique paths
REFERENCED_IMAGES=$(grep -rohE '/images/[a-zA-Z0-9_/-]+\.(webp|png|jpg|jpeg|svg|ico|gif)' $SEARCH_DIRS | sort | uniq)

# Save references to a temp file, converting to filesystem paths
TEMP_REF_FILE=$(mktemp)

# Count references
REF_COUNT=0
for img_path in $REFERENCED_IMAGES; do
  # Remove leading slash and prepend public/
  FS_PATH="public${img_path}"
  echo "$FS_PATH" >> "$TEMP_REF_FILE"
  REF_COUNT=$((REF_COUNT + 1))
done

echo "✅ Found $REF_COUNT unique image references in codebase."
echo "------------------------------------------------------------"

# 2. Check for MISSING images
echo "🚨 Checking for missing images (Referenced but not found)..."
MISSING_COUNT=0

while read -r fs_path; do
  if [ ! -f "$fs_path" ]; then
    echo "  ❌ MISSING: $fs_path"
    MISSING_COUNT=$((MISSING_COUNT + 1))
  fi
done < "$TEMP_REF_FILE"

if [ $MISSING_COUNT -eq 0 ]; then
  echo "  ✅ All referenced images exist in the filesystem."
else
  echo "  ⚠️ Found $MISSING_COUNT missing image(s)!"
fi
echo "------------------------------------------------------------"

# 3. Check for UNUSED images & Backup
echo "🧹 Checking for unused images in '$IMAGE_DIR'..."
UNUSED_COUNT=0

# Find all actual files in public/images
ACTUAL_IMAGES=$(find "$IMAGE_DIR" -type f | grep -E '\.(webp|png|jpg|jpeg|svg|ico|gif)$')

for actual_img in $ACTUAL_IMAGES; do
  # Ignore _store directory as it might be raw assets not meant to be published
  if [[ "$actual_img" == *"_store/"* ]]; then
    continue
  fi

  # Check if the actual image path is in the referenced file list
  if ! grep -qxF "$actual_img" "$TEMP_REF_FILE"; then
    echo "  📦 UNUSED: $actual_img"
    
    # Create backup directory if not exists
    mkdir -p "$BACKUP_DIR"
    
    # Recreate relative directory structure in backup
    REL_PATH="${actual_img#$IMAGE_DIR/}"
    mkdir -p "$BACKUP_DIR/$(dirname "$REL_PATH")"
    
    # Move the file to backup
    mv "$actual_img" "$BACKUP_DIR/$REL_PATH"
    UNUSED_COUNT=$((UNUSED_COUNT + 1))
  fi
done

if [ $UNUSED_COUNT -eq 0 ]; then
  echo "  ✅ No unused images found. Clean as a whistle."
else
  echo "  ✅ Moved $UNUSED_COUNT unused image(s) to: $BACKUP_DIR/"
fi

# Cleanup
rm "$TEMP_REF_FILE"

echo "------------------------------------------------------------"
echo "✅ Image Audit Protocol Completed."
