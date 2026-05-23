import https from 'node:https';

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (e) => resolve({ url, error: e.message }));
  });
};

const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/f/fe/Viettel_logo_2021.svg',
  'https://upload.wikimedia.org/wikipedia/vi/6/65/VNPT_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a0/MobiFone_logo.svg',
  'https://cmctelecom.vn/wp-content/uploads/2019/04/Logo-CTEL-2-01.png',
  'https://upload.wikimedia.org/wikipedia/commons/4/4b/VinaPhone_logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ec/VNG_Corporation_logo.svg'
];

Promise.all(urls.map(checkUrl)).then(console.log);
