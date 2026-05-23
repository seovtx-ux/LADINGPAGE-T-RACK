const https = require('https');

https.get('https://vienthongxanh.vn/danh-muc/phu-kien-quang/hop-phoi-quang-odf/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const urls = [...data.matchAll(/<img[^>]+src="([^">]+)"/g)].map(m => m[1]);
    const maxtelUrls = urls.filter(u => u.includes('maxtel') || u.includes('odf'));
    console.log([...new Set(maxtelUrls)].slice(0, 15).join('\n'));
  });
});
