import fs from 'fs';
import https from 'https';

const get = (url) => new Promise((resolve) => {
  https.get(url, (res) => {
    resolve(res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302);
  }).on('error', () => resolve(false));
});

async function main() {
  const urls = [
      'https://upload.wikimedia.org/wikipedia/commons/f/ff/Viettel_logo_2021.svg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/VNPT_Logo.svg',
      'https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg',
      'https://upload.wikimedia.org/wikipedia/commons/2/23/Mobifone_logo.png',
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Logo_CMC_Corp.png',
      // alternatives
      'https://upload.wikimedia.org/wikipedia/vi/f/ff/Viettel_logo_2021.svg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4b/Logo_Mobifone.png',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/VNPT_Logo.svg'
  ];
  for (let u of urls) {
    console.log(u, await get(u));
  }
}
main();
