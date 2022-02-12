const router = require('express').Router();
const rooms = require('./rooms');

router.use('/rooms', rooms);

module.exports = router;