var express = require('express');
var app = express();

var connections = [];
var users = [];

var port = 3000;

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(port);
//socket server also listening on port 3000
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {

    socket.once('disconnect', function(){
        connections.splice(connections.indexOf(socket), 1);
        socket.disconnect();
        console.log("Disconnected: %s sockets remaining.", connections.length);
    });
    
    socket.on('join', function(payload) {
        var newUser = {
            //'this' in this case, refers to current socket
            id: this.id,
            name: payload.username
        };
        this.emit('joined', newUser);
        console.log("User joined : %s", payload.username);
    });

    socket.on('new message', function (message) {
        console.log("Message(%s) : [%s] %s", this.id, message.user, message.text);
        io.emit('new message', {
            username: message.user,
            message: message.text
        });
    });

    connections.push(socket);
    console.log("Connected: %s sockets connected.", connections.length);
});

console.log("Running polling server at port *.%s", port); 