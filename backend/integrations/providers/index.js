const fs  = require("fs");
const config = require('../../config');
const mainProvider = config.get('mainProvider');


/**
* @param {String} providerName
* */
module.exports = (providerName) => {
    const currentProviderName = providerName || mainProvider
    const providerInfo = config.get(`providers:${currentProviderName}`);

    if (!providerInfo) throw new Error('no main Provider');

    return require(`./${currentProviderName}`)(providerInfo);
}