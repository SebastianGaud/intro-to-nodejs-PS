// Interacting with cmd


process.stdin.resume();

process.stdin.on('data', (chunk) =>{
    process.stdout.write('[Data]\t' + chunk);
});

process.stdin.on('end', () =>{
    process.stdout.write('[End]\n');
});