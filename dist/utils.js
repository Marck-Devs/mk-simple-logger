"use strict";

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

exports.__esModule = true;
exports.Formatter = void 0;

var Formatter = function () {
  function Formatter() {}

  Formatter.formatObj = function (line, data) {
    var keys = Object.keys(data);
    var out = line;

    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
      var k = keys_1[_i];
      out = out.replace(new RegExp("\\{" + k + "\\}", "gi"), data[k]);
    }

    return out;
  };

  Formatter.format = function (line) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var keys = Object.keys(args);
    var out = line;

    for (var k in keys) {
      out = out.replace(new RegExp("\\{" + k + "\\}", "gi"), args[k]);
    }

    return out;
  };

  return Formatter;
}();

exports.Formatter = Formatter;