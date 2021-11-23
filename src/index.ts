import { FileLogger } from "./filelog";
import { LogLevel } from "./levels";
import { StLogger } from "./stdout";
import { ThemeBuilder } from "./theming";
import chalk from "chalk";
export function color() {
  return chalk;
}
export function ThemeBuild() {
  return new ThemeBuilder();
}
export class SimpleLogger {
  private static logLevel: string = "warn";
  private static _instance: SimpleLogger;
  private static isStdout: boolean = true;
  private static isFile: boolean = false;
  private static logFile: string;
  private static theme: ThemeBuilder = null;
  private static errorFile: string;
  private static stLogger: StLogger;
  private static fileLogger: FileLogger;
  private static format: string = "{date} [ {level} ] -> {name} -> {msg}";
  private static dateFormat: string = "{day}-{month}-{y} @ {hour}:{min}:{sec}";

  private name: string;

  public constructor(name: string = "app") {
    if (!SimpleLogger.theme)
      SimpleLogger.theme = new ThemeBuilder();
    SimpleLogger.fileLogger = FileLogger.getLogger();
    SimpleLogger.fileLogger.setLogLevel(SimpleLogger.logLevel);
    SimpleLogger.fileLogger.setLogFile(SimpleLogger.logFile);
    SimpleLogger.fileLogger.setFormat(SimpleLogger.format);
    SimpleLogger.fileLogger.setDateFormat(SimpleLogger.dateFormat);
    SimpleLogger.fileLogger.setErrorFile(SimpleLogger.errorFile);
    SimpleLogger.stLogger = StLogger.getLogger();
    SimpleLogger.stLogger.setLogLevel(SimpleLogger.logLevel);
    SimpleLogger.stLogger.setFormat(SimpleLogger.format);
    SimpleLogger.stLogger.setDateFormat(SimpleLogger.dateFormat);
    SimpleLogger.stLogger.setTheme(SimpleLogger.theme)
    this.name = name;
  }

  /**
   * Set the name of the logger 
   * @param {string} name name of the logger
   * @returns current logger
   */
  public setName(name: string): SimpleLogger {
    this.name = name;
    return this;
  }

  public info(msg, data: any = { name: null }) {
    let _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.info(msg, _data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.info(msg, _data);
  }
  public debug(msg, data: any = { name: null }) {
    let _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.debug(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.debug(msg, data);
  }
  public warn(msg, data: any = { name: null }) {
    let _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.warn(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.warn(msg, data);
  }
  public error(msg, data: any = { name: null }) {
    let _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.error(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.error(msg, data);
  }
  public critical(msg, data: any = { name: null }) {
    let _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.critical(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.critical(msg, data);
  }
  public log(msg, data: any = { name: null }) {
    let _data = data;
    _data.name = this.name;
    if (SimpleLogger.isFile) SimpleLogger.fileLogger.log(msg, data);
    if (SimpleLogger.isStdout) SimpleLogger.stLogger.log(msg, data);
  }

  public static setTheme(theme: ThemeBuilder) {
    SimpleLogger.theme = theme;
    try {
      SimpleLogger.stLogger.setTheme(theme);
    } catch(e){}
  }
  /**
   * set the output file
   * @param {string} file the file to dump logs
   */
  public static setLogFile(file: string) {
    SimpleLogger.logFile = file;
    // prevent error if is not set the logger
    try {
      SimpleLogger.fileLogger.setLogFile(file);
    }
    catch (e) { }
  }

  /**
   * Set the erro file
   * @param {string} file the file to dump error's logs
   */
  public static setErrorFile(file: string) {
    SimpleLogger.errorFile = file;
    try {
      SimpleLogger.fileLogger.setErrorFile(file);
    }
    catch (e) { }
  }

  /**
   * Set the log level
   * @param {string} level the minimun level to show
   */
  public static setLogLevel(level: string) {
    SimpleLogger.logLevel = level;
    try{
      SimpleLogger.stLogger.setLogLevel(level);
      SimpleLogger.fileLogger.setLogLevel(level);
    }
    catch(e){}
  }

  public static enableFileLog() {
    SimpleLogger.isFile = true;
  }

  public static disableFileLog() {
    SimpleLogger.isFile = false;
  }

  public static enableStdout() {
    SimpleLogger.isStdout = true;
  }

  public static disableStdout() {
    SimpleLogger.isStdout = false;
  }

  public static setFormat(format: string) {
    SimpleLogger.format = format;
    try{
      SimpleLogger.fileLogger.setFormat(format);
      SimpleLogger.stLogger.setFormat(format);
    }catch(e) { }
  }

  public static setDateFormat(format: string) {
    SimpleLogger.dateFormat = format;
    try {
      SimpleLogger.fileLogger.setDateFormat(format);
      SimpleLogger.stLogger.setDateFormat(format);
    } catch (e) { }
  }
}
