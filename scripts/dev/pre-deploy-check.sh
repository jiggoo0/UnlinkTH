#!/bin/bash

# ==============================================================================
# 🚀 UnlinkTH Pre-deploy Inspection
# ==============================================================================
# Project: www.unlink-th.com
# URL: https://www.unlink-th.com
# Purpose: Validate code quality & build readiness before deployment
# ==============================================================================

# 📄 Report configuration
REPORT_FILE="unlink-th-pre-deploy-report.md"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

# ✅ Step 0: Remove old report
if [ -f "$REPORT_FILE" ]; then
    rm "$REPORT_FILE"
    echo "🗑️  Old report removed."
fi

echo "🔍 Starting UnlinkTH Pre-deploy Inspection..."

# Initialize Markdown report
echo "# 🚀 UnlinkTH Pre-deploy Inspection Report" > $REPORT_FILE
echo "" >> $REPORT_FILE
echo "> **Project:** www.unlink-th.com" >> $REPORT_FILE
echo "> **URL:** https://www.unlink-th.com" >> $REPORT_FILE
echo "> **Generated:** $TIMESTAMP" >> $REPORT_FILE
echo "> **Branch:** $(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo 'N/A')" >> $REPORT_FILE
echo "" >> $REPORT_FILE

# ==============================================================================
# 1. Auto-fix Linting (Smart Repair)
# ==============================================================================
echo "🛠️  Attempting to auto-fix linting issues..."
echo "## 🛠️ 1. Auto-Fix Procedure" >> $REPORT_FILE

pnpm lint --fix > fix_output.txt 2>&1
FIX_EXIT_CODE=$?

if [ $FIX_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: Auto-fix completed or no issues found." >> $REPORT_FILE
else
    echo "⚠️  Note: Some issues could not be fixed automatically." >> $REPORT_FILE
fi
rm fix_output.txt

# ==============================================================================
# 2. Linting Check
# ==============================================================================
echo "🧹 Running final linting check..."
echo "## 🧹 2. Code Linting (ESLint)" >> $REPORT_FILE

pnpm lint > lint_output.txt 2>&1
LINT_EXIT_CODE=$?

if [ $LINT_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: Linting passed." >> $REPORT_FILE
else
    echo "❌ Status: Linting failed." | tee -a $REPORT_FILE
    echo "### 🔍 Remaining Linting Errors:" >> $REPORT_FILE
    echo "\`\`\`bash" >> $REPORT_FILE
    cat lint_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
fi
rm lint_output.txt

# ==============================================================================
# 3. Type Safety Check
# ==============================================================================
echo "⌨️ Checking TypeScript types..."
echo "## ⌨️ 3. Type Safety Check" >> $REPORT_FILE

pnpm type-check > type_output.txt 2>&1
TYPE_EXIT_CODE=$?

if [ $TYPE_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: TypeScript verified." >> $REPORT_FILE
else
    echo "❌ Status: Type errors detected!" | tee -a $REPORT_FILE
    echo "### 🔍 TypeScript Errors:" >> $REPORT_FILE
    echo "\`\`\`bash" >> $REPORT_FILE
    cat type_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
fi
rm type_output.txt

# ==============================================================================
# 4. Production Build
# ==============================================================================
echo "🏗️  Executing production build..."
echo "## 🏗️ 4. Production Build Test" >> $REPORT_FILE

pnpm run build 2>&1 | tee build_output.txt
BUILD_EXIT_CODE=${PIPESTATUS[0]}

if [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "✅ Status: Build successfully optimized." >> $REPORT_FILE
    echo "### 📊 Route Statistics & Bundle Summary" >> $REPORT_FILE
    echo "\`\`\`text" >> $REPORT_FILE
    sed -n '/Route (app)/,$p' build_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
else
    echo "❌ Status: Build failed!" | tee -a $REPORT_FILE
    echo "### 🔍 Build Logs (Last 50 lines):" >> $REPORT_FILE
    echo "\`\`\`bash" >> $REPORT_FILE
    tail -n 50 build_output.txt >> $REPORT_FILE
    echo "\`\`\`" >> $REPORT_FILE
fi
rm build_output.txt

# ==============================================================================
# Final Summary
# ==============================================================================
echo "" >> $REPORT_FILE
echo "---" >> $REPORT_FILE
echo "## 🏆 Final Verdict" >> $REPORT_FILE

if [ $LINT_EXIT_CODE -eq 0 ] && [ $TYPE_EXIT_CODE -eq 0 ] && [ $BUILD_EXIT_CODE -eq 0 ]; then
    echo "### ✅ READY FOR DEPLOY" >> $REPORT_FILE
    echo "All quality gates passed. This build is safe and recommended for deployment." >> $REPORT_FILE
else
    echo "### 🚫 DEPLOYMENT BLOCKED" >> $REPORT_FILE
    echo "One or more critical checks failed. Fix issues before deploying." >> $REPORT_FILE
fi

echo "🚀 Inspection complete. Report generated → $REPORT_FILE"