"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SimpleLogger = exports.ThemeBuild = exports.color = void 0;
var filelog_1 = require("./filelog");
var stdout_1 = require("./stdout");
var theming_1 = require("./theming");
var chalk_1 = __importDefault(require("chalk"));
function color() {
    return chalk_1["default"];
}
exports.color = color;
function ThemeBuild() {
    return new theming_1.ThemeBuilder();
}
exports.ThemeBuild = ThemeBuild;
var SimpleLogger = /** @class */ (function () {
    function SimpleLogger(name) {
        if (name === void 0) { name = "app"; }
        SimpleLogger.fileLogger = filelog_1.FileLogger.getLogger();
        SimpleLogger.fileLogger.setLogLevel(SimpleLogger.logLevel);
        SimpleLogger.fileLogger.setLogFile(SimpleLogger.logFile);
        SimpleLogger.fileLogger.setFormat(SimpleLogger.format);
        SimpleLogger.fileLogger.setDateFormat(SimpleLogger.dateFormat);
        SimpleLogger.fileLogger.setErrorFile(SimpleLogger.errorFile);
        SimpleLogger.stLogger = stdout_1.StLogger.getLogger();
        SimpleLogger.stLogger.setLogLevel(SimpleLogger.logLevel);
        SimpleLogger.stLogger.setFormat(SimpleLogger.format);
        SimpleLogger.stLogger.setDateFormat(SimpleLogger.dateFormat);
        this.name = name;
    }
    /**
     * Set the name of the logger
     * @param {string} name name of the logger
     * @returns current logger
     */
    SimpleLogger.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SimpleLogger.prototype.info = function (msg, data) {
        if (data === void 0) { data = { name: null }; }
        var _data = data;
        _data.name = this.name;
        if (SimpleLogger.isFile)
            SimpleLogger.fileLogger.info(msg, _data);
        if (SimpleLogger.isStdout)
            SimpleLogger.stLogger.info(msg, _data);
    };
    SimpleLogger.prototype.debug = function (msg, data) {
        if (data === void 0) { data = { name: null }; }
        var _data = data;
        _data.name = this.name;
        if (SimpleLogger.isFile)
            SimpleLogger.fileLogger.debug(msg, data);
        if (SimpleLogger.isStdout)
            SimpleLogger.stLogger.debug(msg, data);
    };
    SimpleLogger.prototype.warn = function (msg, data) {
        if (data === void 0) { data = { name: null }; }
        var _data = data;
        _data.name = this.name;
        if (SimpleLogger.isFile)
            SimpleLogger.fileLogger.warn(msg, data);
        if (SimpleLogger.isStdout)
            SimpleLogger.stLogger.warn(msg, data);
    };
    SimpleLogger.prototype.error = function (msg, data) {
        if (data === void 0) { data = { name: null }; }
        var _data = data;
        _data.name = this.name;
        if (SimpleLogger.isFile)
            SimpleLogger.fileLogger.error(msg, data);
        if (SimpleLogger.isStdout)
            SimpleLogger.stLogger.error(msg, data);
    };
    SimpleLogger.prototype.critical = function (msg, data) {
        if (data === void 0) { data = { name: null }; }
        var _data = data;
        _data.name = this.name;
        if (SimpleLogger.isFile)
            SimpleLogger.fileLogger.critical(msg, data);
        if (SimpleLogger.isStdout)
            SimpleLogger.stLogger.critical(msg, data);
    };
    SimpleLogger.prototype.log = function (msg, data) {
        if (data === void 0) { data = { name: null }; }
        var _data = data;
        _data.name = this.name;
        if (SimpleLogger.isFile)
            SimpleLogger.fileLogger.log(msg, data);
        if (SimpleLogger.isStdout)
            SimpleLogger.stLogger.log(msg, data);
    };
    SimpleLogger.setTheme = function (theme) {
        SimpleLogger.stLogger.setTheme(theme);
    };
    /**
     * set the output file
     * @param {string} file the file to dump logs
     */
    SimpleLogger.setLogFile = function (file) {
        SimpleLogger.logFile = file;
        SimpleLogger.fileLogger.setLogFile(file);
    };
    /**
     * Set the erro file
     * @param {string} file the file to dump error's logs
     */
    SimpleLogger.setErrorFile = function (file) {
        SimpleLogger.errorFile = file;
        SimpleLogger.fileLogger.setErrorFile(file);
    };
    /**
     * Set the log level
     * @param {string} level the minimun level to show
     */
    SimpleLogger.setLogLevel = function (level) {
        SimpleLogger.logLevel = level;
        SimpleLogger.stLogger.setLogLevel(level);
        SimpleLogger.fileLogger.setLogLevel(level);
    };
    SimpleLogger.enableFileLog = function () {
        SimpleLogger.isFile = true;
    };
    SimpleLogger.disableFileLog = function () {
        SimpleLogger.isFile = false;
    };
    SimpleLogger.enableStdout = function () {
        SimpleLogger.isStdout = true;
    };
    SimpleLogger.disableStdout = function () {
        SimpleLogger.isStdout = false;
    };
    SimpleLogger.setFormat = function (format) {
        SimpleLogger.format = format;
        SimpleLogger.fileLogger.setFormat(format);
        SimpleLogger.stLogger.setFormat(format);
    };
    SimpleLogger.setDateFormat = function (format) {
        SimpleLogger.dateFormat = format;
        SimpleLogger.fileLogger.setDateFormat(format);
        SimpleLogger.stLogger.setDateFormat(format);
    };
    SimpleLogger.logLevel = "warn";
    SimpleLogger.isStdout = true;
    SimpleLogger.isFile = false;
    SimpleLogger.format = "{date} [ {level} ] -> {name} -> {msg}";
    SimpleLogger.dateFormat = "{day}-{month}-{y} @ {hour}:{min}:{sec}";
    return SimpleLogger;
}());
exports.SimpleLogger = SimpleLogger;
