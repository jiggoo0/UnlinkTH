import os
import re
import glob

# Emoji to Component Mapping
EMOJI_MAP = {
    "🛡️": "<ShieldCheck />",
    "🛡": "<Shield />",
    "🔒": "<Lock />",
    "⚠️": "<AlertTriangle />",
    "🚨": "<ShieldAlert />",
    "🔧": "<Wrench />",
    "🛠️": "<Wrench />",
    "📁": "<FileText />",
    "📂": "<FileText />",
    "🚀": "<Zap />",
    "⚡": "<Zap />",
    "✅": "<CheckCircle2 />",
    "🔍": "<Search />",
    "💡": "<Lightbulb />",
    "🎯": "<Target />",
    "🌐": "<Globe />",
    "📈": "<BarChart />",
    "📊": "<Activity />",
    "✨": "", # Just remove
    "🕵️‍♂️": "", # Just remove
    "📋": "<ClipboardList />",
    "🔗": "", # Just remove
    "🛰️": "", # Just remove
}

def refactor_mdx(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Remove Redundant CTA Sections
    # Case A: Last header section is a CTA
    sections = re.split(r'(\n### )', content)
    if len(sections) > 1:
        last_body = sections[-1]
        last_header = sections[-2]
        
        if "LINE" in last_header or "LINE" in last_body:
            if any(x in last_header for x in ["<Shield", "<Lock", "<Alert", "ปรึกษา", "ทัก"]):
                content = "".join(sections[:-2]).strip() + "\n"
    
    # Case B: Just a paragraph at the end with LINE
    # (after processing Case A, we check the new end)
    lines = content.strip().split('\n')
    while lines:
        last_line = lines[-1].strip()
        if not last_line:
            lines.pop()
            continue
        if "LINE" in last_line or "แอด LINE" in last_line or "ทัก LINE" in last_line:
            # Check if previous line also looks like CTA or is just a sentence
            lines.pop()
            # If the new last line is also related, pop it
            if lines and any(x in lines[-1] for x in ["ปรึกษา", "ทัก", "ติดต่อ"]):
                lines.pop()
            content = '\n'.join(lines).strip() + "\n"
            lines = content.strip().split('\n')
        else:
            break
    
    # 2. Emoji Replacement
    for emoji, replacement in EMOJI_MAP.items():
        if replacement:
            # If replacement is a component, we want to make sure it's not already there
            # or if it's in a sentence it might look weird.
            # The prompt says: "Replace these emojis with... if they aren't already wrapped in one"
            # "If an emoji doesn't have a clear mapping or if it's used inside a sentence where an icon would look weird, just remove it."
            
            # Simple replacement for now, but we'll be careful with spacing
            content = content.replace(emoji, replacement)
        else:
            content = content.replace(emoji, "")

    # 3. Line length wrapping (Surgical approach)
    # We only wrap paragraphs, not headers or MDX components or frontmatter
    lines = content.split('\n')
    new_lines = []
    in_frontmatter = False
    frontmatter_count = 0
    
    for line in lines:
        if line.strip() == '---':
            frontmatter_count += 1
            in_frontmatter = frontmatter_count % 2 != 0
            new_lines.append(line)
            continue
        
        if in_frontmatter:
            new_lines.append(line)
            continue
            
        if line.startswith('#') or line.startswith('<') or line.startswith('-') or line.startswith('|') or not line.strip():
            new_lines.append(line)
        else:
            # Paragraph line - wrap if > 80
            if len(line) > 80:
                # Simple wrapping at space
                import textwrap
                wrapped = textwrap.fill(line, width=80, break_long_words=False, break_on_hyphens=False)
                new_lines.append(wrapped)
            else:
                new_lines.append(line)
                
    content = '\n'.join(new_lines)

    # Clean up multiple newlines at the end
    content = content.strip() + "\n"

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    files = glob.glob('content/**/*.mdx', recursive=True)
    for f in files:
        print(f"Refactoring {f}...")
        refactor_mdx(f)
