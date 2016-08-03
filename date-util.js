const format = { year: 'numeric', month: 'long', day: 'numeric' };
module.exports = {
    getUnixDate: function(date) {
        return date.getTime() / 1000;
    },
    getNaturalFormatDate: function(date) {
        return date.toLocaleString('en-US', format);
    },
    toDate: function(dateParam) {
        if (isNaN(dateParam)) {
           return new Date(dateParam); // Expect natural form. ex: December 15, 2015 
        }
        return new Date(parseInt(dateParam) * 1000);    // Expect unix form. ex: 1450137600
    }
};
Date.prototype.isValid = function () {
    return this.getTime() === this.getTime();
};
