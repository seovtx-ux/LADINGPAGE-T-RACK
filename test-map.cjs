const https = require('https');

function fetch(url, isRedirect = false) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirecting to:', res.headers.location);
      fetch(res.headers.location, true);
    } else {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        let m = data.match(/<title>(.*?)<\/title>/);
        console.log('Title:', m ? m[1] : 'No title');
        let m2 = data.match(/content=".*?\((-?[0-9.]+),\s*(-?[0-9.]+)\).*?"/);
        console.log('Coords:', m2 ? m2.slice(1) : 'No coords');
        let m3 = data.match(/window\.APP_INITIALIZATION_STATE=\[.*?\]/);
        if (m3) {
           console.log('Has app state');
        }
      });
    }
  }).on('error', console.error);
}

fetch('https://share.google/n2sLNXrtXlSh2IA1W');
