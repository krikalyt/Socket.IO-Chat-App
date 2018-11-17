var path = require('path');
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var socketIO = require('socket.io');
var port = process.env.PORT || 3000;
var publicpath = path.join(__dirname,"../public");
var io = socketIO(server);
app.use(express.static(publicpath));


//used 
io.on('connection',(socket)=>{
    //all your event..
});
server.listen(port,()=>{
    console.log(`Application is Running on port ${port}`);
})