const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');
code = code.replace(/text-slate-700 col-span-2/g, 'text-white col-span-2');
code = code.replace(/text-brand-700 bg-brand-900\/40\/30/g, 'text-brand-300 bg-brand-900/40/30');
fs.writeFileSync('src/App.tsx', code);
