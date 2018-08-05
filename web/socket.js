const http = require('http');
const socketio = require('socket.io');
const fs = require('fs');
const path = require('path');

// handler della request del server
let handler = (req, res) => {
    // Carico la index
    fs.readFile( path.join(__dirname, '/index.html'), (err, data) => {
        // Se c'è un errore restituisco 500
        if (err) {
            res.writeHead(500);
            return res.end('Error loading the file')
        } 
        // Se no restituisco il contentuto
        else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

const app = http.createServer(handler);
const io = socketio.listen(app); // socket ha bisogno di un server dove ascoltare


// Definisco gli eventi del socket
io.sockets.on('connection', (socket) => {
    setInterval(() => {
        var ts = Date.now();
        console.log('[Emitted ts]:' + ts);

        // evento sollevato da server verso client
        socket.emit('timer', ts);
    }, 2000);

    // Evento sollevato dal client verso il server
    socket.on('submit', (data) => {
        console.log('[Reciving]' + data);
    });
});

app.listen(3000);

console.log('[Server is running] on port:' + 3000);
