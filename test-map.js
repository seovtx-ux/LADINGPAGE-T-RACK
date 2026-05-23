const https = require('https');
https.get('https://maps.google.com/maps?q=https://share.google/n2sLNXrtXlSh2IA1W&output=embed', (res) => {
  console.log('Status:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('Length:', data.length));
}).on('error', console.error);
