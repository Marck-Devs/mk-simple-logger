"use strict";
exports.__esModule = true;
exports.makeDateObject = void 0;
function formatToSize(str, length, span, prepend) {
    if (span === void 0) { span = " "; }
    if (prepend === void 0) { prepend = false; }
    var LNG = str.length;
    var out = str;
    if (LNG < length) {
        for (var i = LNG; i < length; i++) {
            if (prepend) {
                out = span + out;
            }
            else {
                out += span;
            }
        }
    }
    return out;
}
function makeDateObject() {
    var DATE = new Date();
    var out = {
        day: formatToSize(new String(DATE.getDate()), 2, "0", true),
        month: formatToSize(new String(DATE.getMonth() + 1), 2, "0", true),
        year: DATE.getFullYear(),
        y: DATE.getFullYear() % 100,
        hour: formatToSize(new String(DATE.getHours()), 2, "0", true),
        min: formatToSize(new String(DATE.getMinutes()), 2, "0", true),
        sec: formatToSize(new String(DATE.getSeconds()), 2, "0", true),
        mil: formatToSize(new String(DATE.getMilliseconds()), 2, "0", true),
        weekDay: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][DATE.getDay()],
        monthName: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"][DATE.getMonth()]
    };
    return out;
}
exports.makeDateObject = makeDateObject;
