import fs from 'fs';
import https from 'https';

const get = (url) => new Promise((resolve) => {
  https.get(url, (res) => {
    resolve(res.statusCode);
  }).on('error', () => resolve('ERR'));
});

async function main() {
  const c = await get('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/T%E1%BA%ADp_%C4%91o%C3%A0n_C%C3%B4ng_ngh%E1%BB%87_CMC_Logo.svg/1024px-T%E1%BA%ADp_%C4%91o%C3%A0n_C%C3%B4ng_ngh%E1%BB%87_CMC_Logo.svg.png');
  console.log(c);
}
main();
