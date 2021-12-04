"use strict";
exports.__esModule = true;
var ConfigLoader = /** @class */ (function () {
    function ConfigLoader() {
        this.checkEnv();
    }
    ConfigLoader.prototype.checkEnv = function () {
        // check if exists env config;
        var config = process.env;
        if (config.LOGS_FOLDER) {
            ConfigLoader.config.folder = config.LOGS_FOLDER;
        }
        if (config.LOG_FILE)
            ConfigLoader.config.logFile = config.LOG_FILE;
        if (config.EROR_FILE) {
            ConfigLoader.config.erroFile = config.LOG_FILE;
        }
        // set log level if it exists in the envirements variables
        if (config.LEVEL) {
            ConfigLoader.config.level = config.LEVEL;
        }
        // set the log level by the node env if LEVEL not exists in enviroment
        if (!config.LEVEL && config.NODE_ENV) {
            switch (config.NODE_ENV) {
                case "production":
                case "deploy":
                    ConfigLoader.config.level = "log";
                    break;
                case "debug":
                case "devel":
                case "development":
                case "sandbox":
                    ConfigLoader.config.level = "debug";
                    break;
                default:
                    ConfigLoader.config.level = "info";
                    break;
            }
        }
    };
    /**
     * get config from the object
     * @param {string} key of the var
     * @param {string} _return the value to return if not found value
     * @returns {any} the value of the default value
     **/
    ConfigLoader.getConf = function (key, _return) {
        if (_return === void 0) { _return = false; }
        if (key in ConfigLoader.config) {
            return ConfigLoader.config[key];
        }
        else {
            return _return;
        }
    };
    ConfigLoader.instance = new ConfigLoader();
    ConfigLoader.config = {};
    return ConfigLoader;
}());
exports["default"] = ConfigLoader;
