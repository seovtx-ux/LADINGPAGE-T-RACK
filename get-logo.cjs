const https = require('https');
function fetchLogo(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return fetchLogo(res.headers.location);
    }
    let data = '';
    res.on('data', d => data+=d);
    res.on('end', () => {
      const match = data.match(/<img[^>]*src=["']([^"']*)["'][^>]*>/gi);
      if (match) {
        match.forEach(m => {
          if (m.toLowerCase().includes('logo')) {
            console.log('Logo match:', m);
          }
        });
      }
    });
  }).on('error', console.error);
}
fetchLogo('https://vienthongxanh.vn');
fetchLogo('https://maxtel.vn');
