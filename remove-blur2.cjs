const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Remove mix-blend-multiply
content = content.replace(/<div className="absolute inset-0 bg-gradient-to-t from-\[\#020617\] to-transparent mix-blend-multiply pointer-events-none"><\/div>/g, '');

// Also let's check index.css to remove the glass-panel blur to be completely sure.
let cssContent = fs.readFileSync('src/index.css', 'utf-8');
cssContent = cssContent.replace(/backdrop-filter: blur\([^\)]+\);/g, '');
cssContent = cssContent.replace(/-webkit-backdrop-filter: blur\([^\)]+\);/g, '');
cssContent = cssContent.replace(/\.text-shadow-glow \{[^\}]+\}/g, '');

fs.writeFileSync('src/App.tsx', content);
fs.writeFileSync('src/index.css', cssContent);
