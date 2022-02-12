const axios = require('axios');
const {formatDate} = require("../../utils/dateUtils");

/**
 *
 * @param {Number} siteId,
 * @param {Object} dateRange
 * @param {Number} groupSize,
 *
 * */
const _serializeGetRoomBody = ({ siteId, dateRange, groupSize }) => ({
    query: {
        ski_site: siteId,
        from_date: formatDate(dateRange.from),
        to_date: formatDate(dateRange.to),
        group_size: groupSize
    }
})

/**
 *
 * @param {Object} options
 * @param {Object} body
 *
 * */
function getRooms(options, body) {
    const roomRequest = data => options.api.post(`/HotelsSimulator`, _serializeGetRoomBody(data));

    return Array.from({length: options.roomSizeLimitationCompareGroupSize}).map((_, index) => roomRequest({ ...body, groupSize: body.groupSize+index }));
}


module.exports = options => {
    options.api = axios.create({ baseURL: options.baseAPI });

    return {
        getRooms: body => getRooms(options, body),
        rooms: data => data.body.accommodations || []
    }
}