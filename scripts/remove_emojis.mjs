/* global console */
import fs from "fs";
import path from "path";

function removeEmojis(text) {
  // Regex pattern to match emojis
  return text.replace(
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{1FAB0}-\u{1FABF}\u{1FAC0}-\u{1FAFF}\u{1F1E6}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}]/gu,
    "",
  );
}

function processDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      processDir(fullPath);
    } else if (file.name.endsWith(".mdx")) {
      const content = fs.readFileSync(fullPath, "utf8");
      const newContent = removeEmojis(content);
      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, "utf8");
        console.log(`Cleaned emojis from: ${fullPath}`);
      }
    }
  }
}

processDir("content");
console.log("Emoji removal process completed.");
