import https from 'node:https';

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => resolve({ url, error: e.message }));
  });
};

const urls = [
  'https://logo.clearbit.com/viettel.vn',
  'https://logo.clearbit.com/vnpt.com.vn',
  'https://logo.clearbit.com/fpt.vn',
  'https://logo.clearbit.com/mobifone.vn',
  'https://logo.clearbit.com/cmc.com.vn',
  'https://logo.clearbit.com/vinaphone.com.vn',
  'https://logo.clearbit.com/samsung.com',
  'https://logo.clearbit.com/vng.com.vn'
];

Promise.all(urls.map(checkUrl)).then(console.log);
