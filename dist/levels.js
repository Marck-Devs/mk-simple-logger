"use strict";
exports.__esModule = true;
exports.LogLevel = void 0;
var LogLevel = /** @class */ (function () {
    function LogLevel() {
    }
    LogLevel.checkLevel = function (inlevel, target) {
        if (typeof target == "string")
            return inlevel >= LogLevel.getLevel4(target);
        return inlevel >= target;
    };
    LogLevel.getLevel4 = function (level) {
        var lvl = level.toLocaleLowerCase();
        switch (level) {
            case "debug":
                return 0;
            case "info":
                return 1;
            case "log":
                return 2;
            case "warn":
                return 3;
            case "error":
                return 4;
            case "critical":
                return 5;
            default:
                return 2;
        }
    };
    return LogLevel;
}());
exports.LogLevel = LogLevel;
