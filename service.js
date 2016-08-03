const DateUtil = require("./date-util.js");
module.exports = {
    getResponseDate: function(dateParam) {
        var datetime = DateUtil.toDate(dateParam);
        var unixResult = null;
        var naturalFormatDateResult = null;
        if (datetime.isValid()) {
            unixResult = DateUtil.getUnixDate(datetime);
            naturalFormatDateResult = DateUtil.getNaturalFormatDate(datetime);
        }
        return {unix: unixResult, natural: naturalFormatDateResult};
    },
};

