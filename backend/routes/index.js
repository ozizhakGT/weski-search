const express = require('express');
const metadata = require('./metadata');
const hotels = require('./hotels');

module.exports = function (app) {
    app.use(express.json());

    app.get('/healthy', (_, res) => res.send('Feel Amazing :D'));
    app.use('/api/metadata', metadata);
    app.use('/api/hotels', hotels);
}