const https = require('node:https');

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => resolve({ url, error: e.message }));
  });
};

const urls = [
  'https://placehold.co/200x100?text=Viettel',
  'https://placehold.co/200x100/FFF/000?text=VNPT'
];

Promise.all(urls.map(checkUrl)).then(console.log);
