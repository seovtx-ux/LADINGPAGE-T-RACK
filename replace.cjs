const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Global Backgrounds & Text
content = content.replace(/bg-slate-50/g, 'bg-[#020617]');
content = content.replace(/bg-white/g, 'bg-[#0f172a]/80 backdrop-blur-md');
content = content.replace(/text-slate-900/g, 'text-white text-shadow-glow');
content = content.replace(/text-slate-600/g, 'text-brand-200');
content = content.replace(/text-slate-500/g, 'text-brand-300');
content = content.replace(/border-slate-100/g, 'border-brand-500/30');
content = content.replace(/border-slate-200/g, 'border-brand-500/40');
content = content.replace(/shadow-lg/g, 'shadow-[0_0_15px_rgba(37,166,223,0.3)]');
content = content.replace(/shadow-md/g, 'shadow-[0_0_10px_rgba(37,166,223,0.2)]');
content = content.replace(/bg-brand-50/g, 'bg-brand-900/40');
content = content.replace(/bg-brand-100/g, 'bg-brand-800/40');

// Specific High-Tech Enhancements
content = content.replace(/Danh Mục Sản Phẩm/g, '<span className="animate-pulse">Danh Mục Sản Phẩm</span>');
content = content.replace(/Hộp Phối Quang ODF/g, 'Hộp Phối Quang ODF');
content = content.replace(/<img(.*?)alt="Banner ODF Maxtel"(.*?)>/, '<img$1alt="Banner ODF Maxtel"$2 /><div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent mix-blend-multiply pointer-events-none"></div>');

// Make logo glowing
content = content.replace(/className="h-8 md:h-10 w-auto object-contain"/g, 'className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"');
content = content.replace(/className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90"/g, 'className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"');

fs.writeFileSync('src/App.tsx', content);
console.log('Replacements done.');
