const https = require('https');
https.get('https://maxtel.vn/wp-content/uploads/2024/06/cropped-Logo-MAXTEL-3000.png', res => {
  console.log('Status code for PNG:', res.statusCode);
});
