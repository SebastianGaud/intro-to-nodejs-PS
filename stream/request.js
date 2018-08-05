const request = require('request');


// Readable stream
const s = request('http://www.pluralsight.com/');

s.on('data', (chunk) => {
   console.log('[DATA}', chunk);
});

s.on('end', ()=> {
    console.log('[DONE]s');
    
});