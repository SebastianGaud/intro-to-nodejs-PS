var exec = require('child_process').exec;

// We can exec any unix command
var child = exec('uptime', function (err, stdout, stderr)  {
    if (err) {
        console.log("Error: " + stderr);
    } else {
        console.log("Output is: "+stdout);
    }
});

console.log("PID is: " + child.pid);
