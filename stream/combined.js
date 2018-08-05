const request = require('request');
const fs = require('fs');

// const s = request('http://www.pluralsight.com/');
// s.pipe(process.stdout);

//piped directly
//request('http://www.pluralsight.com/').pipe(process.stdout);


//piped to file
request('http://www.pluralsight.com/').pipe(fs.createWriteStream('index.html'));