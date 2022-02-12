const router = require('express').Router();
const logic = require('./logic');

router.get('/', (req, res) => {
    try {
        const response = logic.getMetadata();

        res.send(response);
    } catch (err) {
        res.status(500).send('internal server error');
    }
});

module.exports = router;