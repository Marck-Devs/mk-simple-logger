import { ThemeBuilder } from "./theming";
import chalk from "chalk";
import { express } from './features/express';
export declare function color(): chalk.Chalk & chalk.ChalkFunction & {
    supportsColor: false | chalk.ColorSupport;
    Level: chalk.Level;
    Color: ("black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright") | ("bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgGray" | "bgGrey" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright");
    ForegroundColor: "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray" | "grey" | "blackBright" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright";
    BackgroundColor: "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgGray" | "bgGrey" | "bgBlackBright" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright";
    Modifiers: "reset" | "bold" | "dim" | "italic" | "underline" | "inverse" | "hidden" | "strikethrough" | "visible";
    stderr: chalk.Chalk & {
        supportsColor: false | chalk.ColorSupport;
    };
};
export declare function ThemeBuild(): ThemeBuilder;
export declare class SimpleLogger {
    private static logLevel;
    private static _instance;
    private static isStdout;
    private static isFile;
    private static logFile;
    private static theme;
    private static errorFile;
    private static stLogger;
    private static fileLogger;
    private static format;
    private static dateFormat;
    private name;
    /**
    * constructor
    * @param {string} name name of the logger
    **/
    constructor(name?: string);
    /**
     * Set the name of the logger
     * @param {string} name name of the logger
     * @returns current logger
     */
    setName(name: string): SimpleLogger;
    info(msg: string, data?: any): void;
    debug(msg: any, data?: any): void;
    warn(msg: any, data?: any): void;
    error(msg: any, data?: any): void;
    critical(msg: any, data?: any): void;
    log(msg: any, data?: any): void;
    static setTheme(theme: ThemeBuilder): void;
    /**
     * set the output file
     * @param {string} file the file to dump logs
     */
    static setLogFile(file: string): void;
    /**
     * Set the erro file
     * @param {string} file the file to dump error's logs
     */
    static setErrorFile(file: string): void;
    /**
     * Set the log level
     * @param {string} level the minimun level to show
     */
    static setLogLevel(level: string): void;
    static enableFileLog(): void;
    static disableFileLog(): void;
    static enableStdout(): void;
    static disableStdout(): void;
    static setFormat(format: string): void;
    static setDateFormat(format: string): void;
    static global(): SimpleLogger;
}
export declare let logger: typeof express;
