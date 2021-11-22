"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ThemeBuilder = void 0;
var chalk_1 = __importDefault(require("chalk"));
var ThemeBuilder = /** @class */ (function () {
    function ThemeBuilder() {
        this["default"] = {
            danger: chalk_1["default"].red,
            primary: chalk_1["default"].green,
            success: chalk_1["default"].black,
            warning: chalk_1["default"].yellow,
            info: chalk_1["default"].blue,
            critical: chalk_1["default"].bgRed
        };
    }
    ThemeBuilder.prototype.danger = function (colorhex) {
        this["default"].danger = (colorhex);
        return this;
    };
    ThemeBuilder.prototype.critical = function (colorhex) {
        this["default"].critical = colorhex;
        return this;
    };
    ThemeBuilder.prototype.primary = function (colorhex) {
        this["default"].primary = (colorhex);
        return this;
    };
    ThemeBuilder.prototype.success = function (colorhex) {
        this["default"].success = (colorhex);
        return this;
    };
    ThemeBuilder.prototype.warning = function (colorhex) {
        this["default"].warning = (colorhex);
        return this;
    };
    ThemeBuilder.prototype.info = function (colorhex) {
        this["default"].info = (colorhex);
        return this;
    };
    ThemeBuilder.prototype.build = function () {
        return this["default"];
    };
    return ThemeBuilder;
}());
exports.ThemeBuilder = ThemeBuilder;
