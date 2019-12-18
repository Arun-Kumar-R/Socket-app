const express = require('express');
// const logger = require('morgan');
// const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const port = 3000;
const app = express();

const server = app.listen(port, () => {
    console.log("Magic Happens on Port :" + port);
});



const webSocket = socketIO(server);

webSocket.on('connect', () => {
    console.log(" hello");
    webSocket.emit('channel2', 'hello');
});

webSocket.on('channel1', (data) => {
    console.log('Greetings from React native App' + data);
});

webSocket.emit('channel2', 'welcome arun');

webSocket.on('channel2', (value) => {
    console.log("object from react native" + value);
});


