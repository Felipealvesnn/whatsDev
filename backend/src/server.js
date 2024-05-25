const routes = require('./routers');
const express = require('express');
const app = express();
const socketIO = require('socket.io');
const http = require('http');
const cors = require('cors');
const Database = require('./database/index');


app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
const io = socketIO(server, {
    cors: {
        origin: '*',
    }
});

app.request.io = io;

app.listen(3333);


Database.init();

console.log('Server running on port 3333');