const router = require('express').Router();
const logic = require('./logic');

router.post('/', (req, res) => {
    try {
        if (!req.body.subscriberId) throw new Error('no channal to emit');

        const { query, subscriberId } = req.body
        logic.getRooms(query, subscriberId, req.io);

        res.send('ok');
    } catch (err) {
        res.status(500).send('internal server error');
    }
});

module.exports = router;