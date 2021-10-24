"use strict";

require("core-js/modules/es.object.create.js");

require("core-js/modules/es.object.define-property.js");

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
exports.ThemeBuilder = void 0;

var color = __importStar(require("ansi-colors"));

var ThemeBuilder = function () {
  function ThemeBuilder() {
    this["default"] = {
      danger: color.red,
      primary: color.green,
      success: color.bgGreen.black,
      warning: color.yellow,
      info: color.blue,
      critical: color.bgRed.whiteBright
    };
  }

  ThemeBuilder.prototype.danger = function (color) {
    this["default"].danger = color;
    return this;
  };

  ThemeBuilder.prototype.critical = function (color) {
    this["default"].critical = color;
    return this;
  };

  ThemeBuilder.prototype.primary = function (color) {
    this["default"].primary = color;
    return this;
  };

  ThemeBuilder.prototype.success = function (color) {
    this["default"].success = color;
    return this;
  };

  ThemeBuilder.prototype.warning = function (color) {
    this["default"].warning = color;
    return this;
  };

  ThemeBuilder.prototype.info = function (color) {
    this["default"].info = color;
    return this;
  };

  ThemeBuilder.prototype.build = function () {
    return this["default"];
  };

  return ThemeBuilder;
}();

exports.ThemeBuilder = ThemeBuilder;