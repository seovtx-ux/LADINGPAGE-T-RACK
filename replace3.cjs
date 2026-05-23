const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Fix text slate colors for better future tech contrast
content = content.replace(/text-slate-400/g, 'text-brand-300');
content = content.replace(/text-slate-800/g, 'text-brand-100');
content = content.replace(/border-slate-200/g, 'border-brand-500/20');

// Hero section image styling
content = content.replace(/className="bg-slate-100 rounded-2xl overflow-hidden aspect-\[4\/3\] sm:aspect-auto sm:h-\[420px\] relative flex md:flex-col items-center justify-center border border-slate-200"/g, 'className="glass-panel flex-1 rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[420px] relative flex md:flex-col items-center justify-center tech-border"');

// Highlight cards at bottom of Hero
content = content.replace(/bg-black\/60 backdrop-blur-md rounded-xl p-2.5 sm:p-3 border border-white\/10 flex items-center gap-2 sm:gap-3 shadow-lg/g, 'glass-panel rounded-xl p-2.5 sm:p-3 tech-border flex items-center gap-2 sm:gap-3 animate-float drop-shadow-[0_0_15px_rgba(37,166,223,0.3)]');
content = content.replace(/shadow-xl/g, 'shadow-[0_0_20px_rgba(37,166,223,0.4)]');

// Form styling
content = content.replace(/bg-white shadow-\[0_0_10px_rgba\(37,166,223,0\.2\)\] p-8 sm:p-10 rounded-2xl border border-brand-500\/30/g, 'glass-panel p-8 sm:p-10 rounded-2xl tech-border');
content = content.replace(/bg-slate-50 border border-brand-500\/30/g, 'bg-[#020617]/50 border border-brand-500/30 text-white focus:border-brand-500 focus:shadow-[0_0_10px_rgba(37,166,223,0.3)]');

fs.writeFileSync('src/App.tsx', content);
