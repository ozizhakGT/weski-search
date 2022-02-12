module.exports = function (app, io) {
    io.of()

    io.on('connection', socket => {
        console.log('new search subscriber: ' + socket.id);

        socket.on("disconnect", () => {
            console.log(`client leave session: ${socket.id}`)
            socket.leave(socket.id);
        });

        socket.on("error", () => {
            socket.emit("my error", "Failed Connecting!");
        });
    })

    app.use((req, res, next) => {
        req.io = io;
        return next();
    });
}