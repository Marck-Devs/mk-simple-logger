"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SimpleLogger = exports.ThemeBuild = exports.color = void 0;
var filelog_1 = require("./filelog");
var ConfigLoader_1 = __importDefault(require("./ConfigLoader"));
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
    /**
    * constructor
    * @param {string} name name of the logger
    **/
    function SimpleLogger(name) {
        if (name === void 0) { name = "app"; }
        if (!SimpleLogger.theme)
            SimpleLogger.theme = new theming_1.ThemeBuilder();
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
        SimpleLogger.stLogger.setTheme(SimpleLogger.theme);
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
        SimpleLogger.theme = theme;
        try {
            SimpleLogger.stLogger.setTheme(theme);
        }
        catch (e) { }
    };
    /**
     * set the output file
     * @param {string} file the file to dump logs
     */
    SimpleLogger.setLogFile = function (file) {
        SimpleLogger.logFile = file;
        // prevent error if is not set the logger
        try {
            SimpleLogger.fileLogger.setLogFile(file);
        }
        catch (e) { }
    };
    /**
     * Set the erro file
     * @param {string} file the file to dump error's logs
     */
    SimpleLogger.setErrorFile = function (file) {
        SimpleLogger.errorFile = file;
        try {
            SimpleLogger.fileLogger.setErrorFile(file);
        }
        catch (e) { }
    };
    /**
     * Set the log level
     * @param {string} level the minimun level to show
     */
    SimpleLogger.setLogLevel = function (level) {
        SimpleLogger.logLevel = level;
        try {
            SimpleLogger.stLogger.setLogLevel(level);
            SimpleLogger.fileLogger.setLogLevel(level);
        }
        catch (e) { }
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
        try {
            SimpleLogger.fileLogger.setFormat(format);
            SimpleLogger.stLogger.setFormat(format);
        }
        catch (e) { }
    };
    SimpleLogger.setDateFormat = function (format) {
        SimpleLogger.dateFormat = format;
        try {
            SimpleLogger.fileLogger.setDateFormat(format);
            SimpleLogger.stLogger.setDateFormat(format);
        }
        catch (e) { }
    };
    SimpleLogger.global = function () {
        if (!SimpleLogger._instance) {
            SimpleLogger._instance = new SimpleLogger();
        }
        return SimpleLogger._instance;
    };
    SimpleLogger.logLevel = ConfigLoader_1["default"].getConf('level', 'warn');
    SimpleLogger.isStdout = true;
    SimpleLogger.isFile = false;
    SimpleLogger.logFile = ConfigLoader_1["default"].getConf('logFile', null);
    SimpleLogger.theme = null;
    SimpleLogger.errorFile = ConfigLoader_1["default"].getConf('errorFile', null);
    SimpleLogger.format = "{date} [ {level} ] -> {name} -> {msg}";
    SimpleLogger.dateFormat = "{day}-{month}-{y} @ {hour}:{min}:{sec}";
    return SimpleLogger;
}());
exports.SimpleLogger = SimpleLogger;
