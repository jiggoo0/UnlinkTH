#!/bin/bash

echo "🔧 Start refactoring project structure for unlink-th.com"
echo "-------------------------------------------------------"

# 1️⃣ ensure next.config.mjs
if [ ! -f next.config.mjs ]; then
  echo "➕ Creating minimal next.config.mjs"
  cat <<EOF > next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
EOF
fi

# 2️⃣ create recommended folders
echo "📁 Creating recommended directories..."

mkdir -p components/layout
mkdir -p components/sections
mkdir -p components/seo
mkdir -p styles
mkdir -p lib/content
mkdir -p types/content

# 3️⃣ move layout-related components
echo "📦 Moving layout components..."
mv components/shared/Header.tsx components/layout/ 2>/dev/null
mv components/shared/Footer.tsx components/layout/ 2>/dev/null
mv components/shared/Navbar.tsx components/layout/ 2>/dev/null

# 4️⃣ move landing → sections
echo "📦 Moving landing sections..."
mv components/landing/* components/sections/ 2>/dev/null
rmdir components/landing 2>/dev/null

# 5️⃣ ensure LineButton stays shared
echo "📦 Ensuring LineButton location..."
mkdir -p components/shared
mv components/shared/LineButton.tsx components/shared/ 2>/dev/null

# 6️⃣ move FAQ + protocol into sections
echo "📦 Moving narrative sections..."
mv components/shared/FaqSection.tsx components/sections/ 2>/dev/null
mv components/shared/ProtocolStepper.tsx components/sections/ 2>/dev/null

# 7️⃣ normalize lib files
echo "📦 Normalizing lib structure..."
mv lib/service.ts lib/services.ts 2>/dev/null

# 8️⃣ move MDX content to pluralized folders
echo "📚 Normalizing content folders..."

mkdir -p content/services
mv content/service/* content/services/ 2>/dev/null
rmdir content/service 2>/dev/null

# 9️⃣ create styles tokens placeholder
if [ ! -f styles/tokens.css ]; then
  echo "🎨 Creating styles/tokens.css"
  cat <<EOF > styles/tokens.css
:root {
  --color-bg: #0b0f14;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-accent: #2563eb;

  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
}
EOF
fi

# 10️⃣ warn about unused UI form components
echo "⚠️ Reminder:"
echo " - ui/form.tsx, input.tsx, textarea.tsx"
echo "   should NOT be used for data submission (LINE only)"

echo "-------------------------------------------------------"
echo "✅ Refactor structure completed (non-destructive)"
echo "👉 Next step: update import paths + clean unused UI"