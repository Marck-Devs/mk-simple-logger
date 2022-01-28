
import { SimpleLogger } from '../index';
export function express(name = "request") {
    return function (request, response, next) {
        const LOG = new SimpleLogger(name);
        const URL = request.url;
        const METHOD = request.method;
        const init = new Date().getTime(); // current time
        response.logger = LOG; // pass logger to the next middleware
        next(); // call next middleware
        response.on('finish', function () {
            const final = new Date().getTime();
            LOG.info("{method} {url} resolve in {time}ms", {
                method: METHOD,
                url: URL,
                time: (final - init)
            });
        });
    }
}