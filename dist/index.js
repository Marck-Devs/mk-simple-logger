"use strict";

require("core-js/modules/es.function.name.js");

exports.__esModule = true;
exports.SimpleLogger = void 0;

var filelog_1 = require("./filelog");

var stdout_1 = require("./stdout");

var SimpleLogger = function () {
  function SimpleLogger(name) {
    if (name === void 0) {
      name = "app";
    }

    SimpleLogger.fileLogger = filelog_1.FileLogger.getLogger();
    SimpleLogger.fileLogger.setLogLevel(SimpleLogger.logLevel);
    SimpleLogger.fileLogger.setLogFile(SimpleLogger.logFile);
    SimpleLogger.fileLogger.setFortmat(SimpleLogger.format);
    SimpleLogger.fileLogger.setDateFormat(SimpleLogger.dateFormat);
    SimpleLogger.fileLogger.setErrorFile(SimpleLogger.errorFile);
    SimpleLogger.stLogger = stdout_1.StLogger.getLogger();
    SimpleLogger.stLogger.setLogLevel(SimpleLogger.logLevel);
    SimpleLogger.stLogger.setFortmat(SimpleLogger.format);
    SimpleLogger.stLogger.setDateFormat(SimpleLogger.dateFormat);
    this.name = name;
  }

  SimpleLogger.prototype.setName = function (name) {
    this.name = name;
    return this;
  };

  SimpleLogger.prototype.info = function (msg, data) {
    if (data === void 0) {
      data = {
        name: null
      };
    }

    var _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.info(msg, _data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.info(msg, _data);
  };

  SimpleLogger.prototype.debug = function (msg, data) {
    if (data === void 0) {
      data = {
        name: null
      };
    }

    var _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.debug(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.debug(msg, data);
  };

  SimpleLogger.prototype.warn = function (msg, data) {
    if (data === void 0) {
      data = {
        name: null
      };
    }

    var _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.warn(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.warn(msg, data);
  };

  SimpleLogger.prototype.error = function (msg, data) {
    if (data === void 0) {
      data = {
        name: null
      };
    }

    var _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.error(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.error(msg, data);
  };

  SimpleLogger.prototype.critical = function (msg, data) {
    if (data === void 0) {
      data = {
        name: null
      };
    }

    var _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.critical(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.critical(msg, data);
  };

  SimpleLogger.prototype.log = function (msg, data) {
    if (data === void 0) {
      data = {
        name: null
      };
    }

    var _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.log(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.log(msg, data);
  };

  SimpleLogger.setTheme = function (theme) {
    SimpleLogger.stLogger.setTheme(theme);
  };

  SimpleLogger.setLogFile = function (file) {
    SimpleLogger.fileLogger.setLogFile(file);
  };

  SimpleLogger.setErrorFile = function (file) {
    SimpleLogger.fileLogger.setErrorFile(file);
  };

  SimpleLogger.setLogLevel = function (level) {
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

  SimpleLogger.logLevel = "warn";
  SimpleLogger.isStdout = true;
  SimpleLogger.isFile = false;
  SimpleLogger.logFile = "app.log";
  SimpleLogger.errorFile = null;
  SimpleLogger.format = "{date} [ {level} ] -> {name} -> {msg}";
  SimpleLogger.dateFormat = "{day}-{month}-{y} @ {hour}:{min}:{sec}";
  return SimpleLogger;
}();

exports.SimpleLogger = SimpleLogger;
var logger = new SimpleLogger("mk");
SimpleLogger.setLogLevel("debug");
logger.info("Info message");
logger.error("One error {id}", {
  id: "this"
});
SimpleLogger.setLogLevel("critical");
logger.error("One error {id}", {
  id: "this"
});
logger.critical("One critical {id}", {
  id: "this"
});