const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Remove all text shadow blurs
content = content.replace(/ text-shadow-glow/g, '');

// Remove all drop shadows on images that cause blur
content = content.replace(/ drop-shadow-\[0_0_8px_rgba\(255,255,255,0\.8\)\]/g, '');
content = content.replace(/ drop-shadow-\[0_0_10px_rgba\(255,255,255,0\.1\)\]/g, '');

// Remove backdrop blurs on nav and backgrounds to prevent overall blurriness
content = content.replace(/backdrop-blur-md\/90/g, '');
content = content.replace(/backdrop-blur-md\/80/g, '');
content = content.replace(/backdrop-blur-md/g, '');
content = content.replace(/ backdrop-blur/g, '');

// Clean up weird double classes leftover
content = content.replace(/bg-\[\#0f172a\]\/80 \/80/g, 'bg-[#0f172a]');

// Fix product image square backgrounds. Jpegs look bad on dark/transparent backgrounds.
content = content.replace(/bg-slate-950\/50/g, 'bg-white rounded-t-2xl');
content = content.replace(/bg-\[\#0f172a\]\/80/g, 'bg-[#0f172a]'); // Remove transparent backgrounds which might have had backdrop-blur

fs.writeFileSync('src/App.tsx', content);
