import { ThemeBuilder } from "./theming";
export declare class StLogger {
    private theme;
    private format;
    private loglevel;
    private dateFormat;
    private static _instance;
    private constructor();
    static getLogger(): StLogger;
    private buildEssentials;
    private check;
    info(msg: string, data?: object): void;
    warn(msg: string, data?: object): void;
    error(msg: string, data?: object): void;
    log(msg: string, data?: object): void;
    critical(msg: string, data?: object): void;
    debug(msg: string, data?: object): void;
    setFormat(format: any): StLogger;
    setDateFormat(format: any): StLogger;
    setTheme(themBuild: ThemeBuilder): this;
    setLogLevel(lvl: string): StLogger;
}
