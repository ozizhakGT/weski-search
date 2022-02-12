const sites = require('../../db/sites');

const getMetadata = () => ({
    sites,
    groupSizes: Array.from({length: 10}).map((_, i) => ({value: i+1, label: `${i+1} People`}))
});

module.exports = {
    getMetadata
}