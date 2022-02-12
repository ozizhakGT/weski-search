const port = require('./config').get('server:port');
const cors = require('cors');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

require('./sockets')(app, io);
app.use(cors());
require('./routes')(app);

server.listen(port, () => {
   console.log(`server listen successfully on port ${port}`);
});
