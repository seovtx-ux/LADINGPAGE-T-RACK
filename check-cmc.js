import https from 'https';

const get = (url) => new Promise((resolve) => {
  https.get(url, (res) => {
    resolve(res.statusCode);
  }).on('error', () => resolve('ERR'));
});

async function main() {
  console.log(await get('https://cmctelecom.vn/wp-content/uploads/2019/07/logo-cmc.png'));
}
main();
