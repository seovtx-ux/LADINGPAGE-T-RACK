const https = require('https');

https.get('https://vienthongxanh.vn/danh-muc/tu-mang-tu-rack/page/3/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const products = [];
    const regex = /<img[^>]+src=["']([^"']+)["'][^>]*class=["'][^"']*attachment-woocommerce_thumbnail[^"']*["'][^>]*>.*?<h3.*?><a[^>]*>(.*?)<\/a><\/h3>/gs;
    let match;
    while ((match = regex.exec(data)) !== null) {
      products.push({ title: match[2].trim(), img: match[1] });
    }
    console.log(JSON.stringify(products, null, 2));
  });
});
