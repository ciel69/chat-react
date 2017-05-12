module.exports = function (server) {
    var io = require('socket.io').listen(server);
    io.set('origin', 'localhost:*');

    io.sockets.on('connection', function(socket) {

        socket.on('message', function(text, cb) {
            socket.broadcast.emit('message', text);
            cb && cb();
        });

    });

    return io;
};