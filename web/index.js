const http = require('http');

let options = {
    host: 'www.google.it',
    port: 80,
    path: '/',
    method: 'GET'
};

console.log('[Make Request]');

let req = http.request('http://'+options.host, (response)=> {
    console.log('[Response]' , response);
    response.pipe(process.stdout);
});

req.end();


