const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const routes = require('./routers');
const Database = require('./database/index');
const { getInstagramData } = require('./services/instagram');

getInstagramData();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log(`Socket conectado: ${socket.id}`);
});

app.request.io = io;




server.listen(3333, () => {
    console.log('Server running on port 3333');
});

Database.init();
