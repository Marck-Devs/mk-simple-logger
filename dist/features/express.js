"use strict";
exports.__esModule = true;
exports.express = void 0;
var index_1 = require("../index");
function express(name) {
    if (name === void 0) { name = "request"; }
    return function (request, response, next) {
        var LOG = new index_1.SimpleLogger(name);
        var URL = request.url;
        var METHOD = request.method;
        var init = new Date().getTime(); // current time
        response.logger = LOG; // pass logger to the next middleware
        next(); // call next middleware
        response.on('finish', function () {
            var final = new Date().getTime();
            LOG.info("{method} {url} resolve in {time}ms", {
                method: METHOD,
                url: URL,
                time: (final - init)
            });
        });
    };
}
exports.express = express;
