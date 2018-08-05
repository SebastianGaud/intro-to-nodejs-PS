const fs = require('fs');

const h = require('http');

h.createServer((req, res) => {
   res.writeHead(200, {'Content-type': 'text/plain'});
   if (req.url === '/file') {
       fs.createReadStream(__dirname + '/file.txt').pipe(res); // -> in questo modo facciamo una pipe tra il contenuto del file ed il browser di cui all'interno troveremo il contenuto del file
   } else {
       res.end('Hello World');
   }
   
}).listen(3000);

console.log('[Server running] on port:' + 3000);
