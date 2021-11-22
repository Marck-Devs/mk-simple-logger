"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.ThemeBuilder = void 0;
var color = __importStar(require("chalk"));
var ThemeBuilder = (function () {
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
    ThemeBuilder.prototype.danger = function (colorhex) {
        this["default"].danger = color.hex(colorhex);
        return this;
    };
    ThemeBuilder.prototype.critical = function (colorhex) {
        this["default"].critical = colorhex;
        return this;
    };
    ThemeBuilder.prototype.primary = function (colorhex) {
        this["default"].primary = color.hex(colorhex);
        return this;
    };
    ThemeBuilder.prototype.success = function (colorhex) {
        this["default"].success = color.hex(colorhex);
        return this;
    };
    ThemeBuilder.prototype.warning = function (colorhex) {
        this["default"].warning = color.hex(colorhex);
        return this;
    };
    ThemeBuilder.prototype.info = function (colorhex) {
        this["default"].info = color.hex(colorhex);
        return this;
    };
    ThemeBuilder.prototype.build = function () {
        return this["default"];
    };
    return ThemeBuilder;
}());
exports.ThemeBuilder = ThemeBuilder;
