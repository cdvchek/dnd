const { User } = require("../models");

// sockets to listen to connection
exports = module.exports = function (io) {
    io.on('connect',(socket)=>{
        socket.on('c-joinNotiRoom',(socketObj) => {
            const room = socketObj.email;
            socket.join(room);
        });

        socket.on('c-joinGameRoom',(socketObj) => {
            const room = socketObj.game_id;
            socket.join(room);
        });

        socket.on('c-invite',(socketObj) => {
            const room = socketObj.user_email;
            socket.broadcast.to(room).emit("s-invite", socketObj);
        });

        socket.on('c-sendChat',(socketObj) => {
            const room = socketObj.game_id;
            socket.broadcast.to(room).emit('s-sendChat', socketObj);
        });

        socket.on('c-newToken',(socketObj) => {
            const room = socketObj.game_id;
            socket.broadcast.to(room).emit('s-newToken',socketObj);
        });
    });
}