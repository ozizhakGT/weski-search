const {format} = require('date-and-time');

const formatDate = d => {
    const date = new Date(d);

    return format(date, 'MM/DD/YYYY');
}

module.exports = {
    formatDate
}