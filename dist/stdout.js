"use strict";
exports.__esModule = true;
exports.StLogger = void 0;
var utils_1 = require("./utils");
var theming_1 = require("./theming");
var levels_1 = require("./levels");
var date_utils_1 = require("./commons/date-utils");
var StLogger = /** @class */ (function () {
    function StLogger(them) {
        this.format = "{date} - [ {level} ] - {msg}";
        this.dateFormat = "{weekDay} {day}/{month}/{year} : {hour}:{min}:{sec}";
        this.theme = them.build();
    }
    StLogger.getLogger = function () {
        if (!StLogger._instance)
            StLogger._instance = new StLogger(new theming_1.ThemeBuilder());
        return StLogger._instance;
    };
    StLogger.prototype.buildEssentials = function (obj) {
        var out = obj;
        var dateObj = (0, date_utils_1.makeDateObject)();
        out.date = utils_1.Formatter.formatObj(this.dateFormat, dateObj);
        return out;
    };
    StLogger.prototype.check = function (lvl) {
        return levels_1.LogLevel.checkLevel(levels_1.LogLevel.getLevel4(lvl), this.loglevel);
    };
    StLogger.prototype.info = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("info"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = this.theme.info.underline("INFO");
        var line = utils_1.Formatter.formatObj(this.format, _data);
        console.log(line);
    };
    StLogger.prototype.warn = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("warn"))
            return;
        var _data = data;
        _data.msg = this.theme.warning(utils_1.Formatter.formatObj(msg, data));
        _data = this.buildEssentials(_data);
        _data.level = this.theme.warning.bold("WARN");
        var line = utils_1.Formatter.formatObj(this.format, _data);
        console.log(line);
    };
    StLogger.prototype.error = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("error"))
            return;
        var _data = data;
        _data.msg = this.theme.danger(utils_1.Formatter.formatObj(msg, data));
        _data = this.buildEssentials(_data);
        _data.level = this.theme.danger.bold("ERROR");
        var line = utils_1.Formatter.formatObj(this.format, _data);
        console.error(line);
    };
    StLogger.prototype.log = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("log"))
            return;
        var _data = data;
        _data.msg = (utils_1.Formatter.formatObj(msg, data));
        _data = this.buildEssentials(_data);
        _data.level = this.theme.warning.underline("LOG");
        var line = utils_1.Formatter.formatObj(this.format, _data);
        console.log(line);
    };
    StLogger.prototype.critical = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("critical"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "CRITICAL";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        console.error(this.theme.critical.bold(line));
    };
    StLogger.prototype.debug = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("debug"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = this.theme.primary.bold("DEBUG");
        var line = utils_1.Formatter.formatObj(this.format, _data);
        console.log(line);
    };
    StLogger.prototype.setFormat = function (format) {
        this.format = format;
        return this;
    };
    StLogger.prototype.setDateFormat = function (format) {
        this.dateFormat = format;
        return this;
    };
    StLogger.prototype.setTheme = function (themBuild) {
        this.theme = themBuild.build();
        return this;
    };
    StLogger.prototype.setLogLevel = function (lvl) {
        this.loglevel = levels_1.LogLevel.getLevel4(lvl);
        return this;
    };
    return StLogger;
}());
exports.StLogger = StLogger;
