export declare class FileLogger {
    private format;
    private errorFile;
    private logFile;
    private loglevel;
    private dateFormat;
    private static _instance;
    private constructor();
    static getLogger(): FileLogger;
    private buildEssentials;
    private check;
    private writeLog;
    private writeError;
    info(msg: string, data?: object): void;
    warn(msg: string, data?: object): void;
    log(msg: string, data?: object): void;
    error(msg: string, data?: object): void;
    critical(msg: string, data?: object): void;
    debug(msg: string, data?: object): void;
    setFormat(format: any): FileLogger;
    setDateFormat(format: any): FileLogger;
    setLogFile(file: string): FileLogger;
    setErrorFile(file: string): FileLogger;
    setLogLevel(lvl: string): FileLogger;
}
