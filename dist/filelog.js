"use strict";
exports.__esModule = true;
exports.FileLogger = void 0;
var utils_1 = require("./utils");
var fs_1 = require("fs");
var levels_1 = require("./levels");
var FileLogger = /** @class */ (function () {
    function FileLogger() {
        this.format = "{date} - [ {level} ] - {msg}";
        this.dateFormat = "{weekDay} {day}/{month}/{year} : {hour}:{min}:{sec}";
    }
    FileLogger.getLogger = function () {
        if (!FileLogger._instance)
            FileLogger._instance = new FileLogger();
        return FileLogger._instance;
    };
    FileLogger.prototype.buildEssentials = function (obj) {
        var date = new Date();
        var out = obj;
        var dateObj = {
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            y: date.getFullYear() % 100,
            hour: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds(),
            mil: date.getMilliseconds(),
            weekDay: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][date.getDay()]
        };
        out.date = utils_1.Formatter.formatObj(this.dateFormat, dateObj);
        return out;
    };
    FileLogger.prototype.check = function (lvl) {
        return levels_1.LogLevel.checkLevel(levels_1.LogLevel.getLevel4(lvl), this.loglevel);
    };
    FileLogger.prototype.writeLog = function (line) {
        if (!this.logFile) {
            console.error("LogFile not set");
            return;
        }
        (0, fs_1.appendFileSync)(this.logFile, line + "\n");
    };
    FileLogger.prototype.writeError = function (line) {
        if (!this.errorFile) {
            this.writeLog(line);
        }
        else {
            (0, fs_1.appendFileSync)(this.errorFile, line + "\n");
        }
    };
    FileLogger.prototype.info = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("info"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "INFO";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        this.writeLog(line);
    };
    FileLogger.prototype.warn = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("warn"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "WARN";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        this.writeLog(line);
    };
    FileLogger.prototype.log = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("log"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "LOG";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        this.writeLog(line);
    };
    FileLogger.prototype.error = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("error"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "ERROR";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        this.writeError(line);
    };
    FileLogger.prototype.critical = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("critical"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "CRITICAL";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        "";
        this.writeError(line);
    };
    FileLogger.prototype.debug = function (msg, data) {
        if (data === void 0) { data = {}; }
        if (!this.check("debug"))
            return;
        var _data = data;
        _data.msg = utils_1.Formatter.formatObj(msg, data);
        _data = this.buildEssentials(_data);
        _data.level = "DEBUG";
        var line = utils_1.Formatter.formatObj(this.format, _data);
        this.writeLog(line);
    };
    FileLogger.prototype.setFormat = function (format) {
        this.format = format;
        return this;
    };
    FileLogger.prototype.setDateFormat = function (format) {
        this.dateFormat = format;
        return this;
    };
    FileLogger.prototype.setLogFile = function (file) {
        this.logFile = file;
        return this;
    };
    FileLogger.prototype.setErrorFile = function (file) {
        this.errorFile = file;
        return this;
    };
    FileLogger.prototype.setLogLevel = function (lvl) {
        this.loglevel = levels_1.LogLevel.getLevel4(lvl);
        return this;
    };
    return FileLogger;
}());
exports.FileLogger = FileLogger;
