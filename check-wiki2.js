import fs from 'fs';
import https from 'https';

const fetchWikiUrl = (filename) => new Promise((resolve) => {
  const url = `https://vi.wikipedia.org/w/api.php?action=query&titles=T%E1%BA%ADp_tin:${filename}&prop=imageinfo&iiprop=url&format=json`;
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
    'VNPT_Logo.svg',
    'Logo_VNPT.svg',
    'CMC_Corporation_logo.png',
    'Logo_CMC.png'
  ];
  for (let f of files) {
    console.log(f, await fetchWikiUrl(f));
  }
}
main();
