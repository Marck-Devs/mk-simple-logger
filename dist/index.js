"use strict";

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.function.name.js");

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }

  __setModuleDefault(result, mod);

  return result;
};

exports.__esModule = true;
exports.SimpleLogger = exports.color = void 0;

var filelog_1 = require("./filelog");

var stdout_1 = require("./stdout");

var _color = __importStar(require("ansi-colors"));

function color() {
  return _color;
}

exports.color = color;

var SimpleLogger = function () {
  function SimpleLogger(name) {
    if (name === void 0) {
      name = "app";
    }

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

  SimpleLogger.setFormat = function (format) {
    SimpleLogger.format = format;
    SimpleLogger.fileLogger.setFormat(format);
    SimpleLogger.stLogger.setFormat(format);
  };

  SimpleLogger.setDateFormat = function (format) {
    SimpleLogger.format = format;
    SimpleLogger.fileLogger.setDateFormat(format);
    SimpleLogger.stLogger.setDateFormat(format);
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