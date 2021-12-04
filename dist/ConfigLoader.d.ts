export default class ConfigLoader {
    static instance: ConfigLoader;
    private config;
    private constructor();
    private conf;
    private checkEnv;
    /**
     * get config from the object
     * @param {string} key of the var
     * @param {string} _return the value to return if not found value
     * @returns {any} the value of the default value
     **/
    getConf(key: string, _return?: any): any;
}
