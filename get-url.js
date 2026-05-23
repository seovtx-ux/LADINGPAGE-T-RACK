const https = require('https');

https.get('https://maps.app.goo.gl/n2sLNXrtXlSh2IA1W', (res) => {
  console.log('Location:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
