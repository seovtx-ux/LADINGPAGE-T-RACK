const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302);
    }).on('error', () => {
      resolve(false);
    });
  });
}

async function run() {
  const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/Viettel_logo_2021.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/ed/VNPT_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Mobifone_logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_CMC_Corp.png'
  ];
  
  for (const url of urls) {
    const valid = await checkUrl(url);
    console.log(`${url} -> ${valid ? 'OK' : 'FAIL'}`);
  }
}

run();
