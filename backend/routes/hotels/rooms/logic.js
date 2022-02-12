const provider = require('../../../integrations/providers')();


function getRooms(query, subscriberId, socket) {
    process.nextTick(() => {
        const uniqRooms = [];
        const roomsArray = provider.getRooms(query);

        roomsArray.forEach((rooms, i) => {
            try {
                rooms.then(res => {
                    const rooms  = provider.rooms(res.data);

                    rooms && socket.to(subscriberId).emit('search', rooms);
                }).catch(err => console.log(err));
            } catch (err) {
                console.log(err);
            }
        })
    })
}

module.exports = { getRooms }