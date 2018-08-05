var fork = require('child_process').fork;
var path = require('path');

var child = fork(path.join(__dirname, '/honorstudent.js'));

child.on('message', (message) => {
    console.log('The answer is: ' + message.answer);
    child.send({cmd: 'done'});
});

child.send({cmd: 'double', number: 20});