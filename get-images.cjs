const https = require('https');

https.get('https://vienthongxanh.vn/danh-muc/tu-mang-tu-rack/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const products = [];
    // Try to match product containers and their images/titles
    const regex = /<img[^>]+src=["']([^"']+)["'][^>]*class=["'][^"']*attachment-woocommerce_thumbnail[^"']*["'][^>]*>.*?<h3.*?><a[^>]*>(.*?)<\/a><\/h3>/gs;
    let match;
    while ((match = regex.exec(data)) !== null) {
      const img = match[1];
      const title = match[2];
      products.push({ title: title.trim(), img });
    }
    console.log(JSON.stringify(products, null, 2));
  });
}).on('error', (e) => {
  console.error(e);
});
