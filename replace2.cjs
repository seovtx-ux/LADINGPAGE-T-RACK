const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Fixing shadow double classes
content = content.replace(/shadow-\[0_0_15px_rgba\(37,166,223,0\.3\)\] shadow-slate-200\/50/g, 'shadow-[0_0_20px_rgba(37,166,223,0.15)]');

// Futuristic Section styling
content = content.replace(/className="py-24 bg-\[\#0f172a\]\/80 backdrop-blur-md border-b border-brand-500\/30"/g, 'className="py-24 relative tech-border"');
content = content.replace(/className="py-24 bg-\[\#020617\] border-b border-brand-500\/30 relative"/g, 'className="py-24 bg-[#020617] border-b border-brand-500/10 relative"');

// Replace standard tags and backgrounds
content = content.replace(/bg-brand-600 hover:bg-brand-500 text-white/g, 'bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(37,166,223,0.5)] border border-brand-400/50');
content = content.replace(/bg-accent-500 hover:bg-accent-600 text-white/g, 'bg-accent-600 hover:bg-accent-500 text-white shadow-[0_0_20px_rgba(195,28,36,0.6)] border border-accent-400/50');
content = content.replace(/bg-\[\#0f172a\]\/80 backdrop-blur-md rounded-2xl/g, 'glass-panel rounded-2xl');
content = content.replace(/bg-\[\#0f172a\]\/80 backdrop-blur-md p-4/g, 'glass-panel p-4');

content = content.replace(/<span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"><\/span>/g, '<span className="flex h-2 w-2 rounded-full bg-accent-500 animate-glow-red"></span>');

// Text gradients for Main Headings
content = content.replace(/Hộp Phối Quang ODF <span className="text-brand-600/g, 'Hộp Phối Quang ODF <span className="text-gradient hover:animate-glow-red transition-all duration-300 cursor-default"');
content = content.replace(/Maxtel Cao Cấp<\/span>/g, 'Maxtel Cao Cấp</span>');

content = content.replace(/text-slate-900/g, 'text-white');
content = content.replace(/border-slate-50/g, 'border-brand-500/10');
content = content.replace(/border-slate-800/g, 'border-brand-500/20');
content = content.replace(/bg-slate-900 text-slate-400/g, 'glass-panel-heavy text-brand-200 text-sm border-t border-brand-500/30');

// Features fix
content = content.replace(/bg-\[\#020617\] p-8 rounded-2xl border border-brand-500\/30 hover:shadow-\[0_0_15px_rgba\(37,166,223,0\.3\)\]/g, 'glass-panel p-8 rounded-2xl cyber-card group');
content = content.replace(/<div className="w-14 h-14 bg-brand-900\/40 rounded-xl flex items-center justify-center mb-6">/g, '<div className="w-14 h-14 bg-brand-900/40 rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">');
content = content.replace(/className="text-brand-600 w-7 h-7"/g, 'className="text-brand-400 w-7 h-7"');

// Fix Product Image Background 
content = content.replace(/aspect-square relative overflow-hidden glass-panel p-4/g, 'aspect-square relative overflow-hidden bg-slate-950/50 p-4 flex items-center justify-center');
content = content.replace(/className="w-full h-full object-contain/g, 'className="w-full h-full p-2 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]');
content = content.replace(/className="bg-brand-600 text-white/g, 'className="bg-brand-600/90 backdrop-blur text-white border border-brand-400/50');
content = content.replace(/text-brand-600 bg-brand-900\/40 group-hover:bg-brand-600/g, 'text-brand-400 bg-brand-900/40 border border-brand-500/30 group-hover:bg-brand-600');

fs.writeFileSync('src/App.tsx', content);
