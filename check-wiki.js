import fs from 'fs';
import https from 'https';

const fetchWikiUrl = (filename) => new Promise((resolve) => {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${filename}&prop=imageinfo&iiprop=url&format=json`;
  https.get(url, { headers: { 'User-Agent': 'NodeJS' } }, (res) => {
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const pages = json.query.pages;
        const page = Object.values(pages)[0];
        resolve(page.imageinfo ? page.imageinfo[0].url : 'NOT_FOUND');
      } catch (e) {
        resolve('ERR');
      }
    });
  }).on('error', () => resolve('ERR'));
});

async function main() {
  const files = [
    'Viettel_logo_2021.svg',
    'Logo_Viettel.svg',
    'VNPT_Logo.svg',
    'FPT_logo_2010.svg',
    'Logo_FPT.svg',
    'Mobifone_logo.png',
    'MobiFone_logo.svg',
    'Logo_CMC_Corp.png'
  ];
  for (let f of files) {
    console.log(f, await fetchWikiUrl(f));
  }
}
main();
