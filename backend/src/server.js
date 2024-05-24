const routes = require('./routers');
const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(routes);

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.request.io = io;

app.listen(3333);
console.log('Server running on port 3333');