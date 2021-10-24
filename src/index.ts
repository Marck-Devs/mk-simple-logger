import { FileLogger } from "./filelog";
import { LogLevel } from "./levels";
import { StLogger } from "./stdout";
import { ThemeBuilder } from "./theming";
import * as _color from "ansi-colors";
export function color() {
  return _color;
}
export class SimpleLogger {
  private static logLevel: string = "warn";
  private static _instance: SimpleLogger;
  private static isStdout: boolean = true;
  private static isFile: boolean = false;
  private static logFile: string = "app.log";
  private static errorFile: string = null;
  private static stLogger: StLogger;
  private static fileLogger: FileLogger;
  private static format: string = "{date} [ {level} ] -> {name} -> {msg}";
  private static dateFormat: string = "{day}-{month}-{y} @ {hour}:{min}:{sec}";

  private name: string;

  public constructor(name: string = "app") {
    SimpleLogger.fileLogger = FileLogger.getLogger();
    SimpleLogger.fileLogger.setLogLevel(SimpleLogger.logLevel);
    SimpleLogger.fileLogger.setLogFile(SimpleLogger.logFile);
    SimpleLogger.fileLogger.setFortmat(SimpleLogger.format);
    SimpleLogger.fileLogger.setDateFormat(SimpleLogger.dateFormat);
    SimpleLogger.fileLogger.setErrorFile(SimpleLogger.errorFile);
    SimpleLogger.stLogger = StLogger.getLogger();
    SimpleLogger.stLogger.setLogLevel(SimpleLogger.logLevel);
    SimpleLogger.stLogger.setFortmat(SimpleLogger.format);
    SimpleLogger.stLogger.setDateFormat(SimpleLogger.dateFormat);
    this.name = name;
  }

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
    SimpleLogger.stLogger.setTheme(theme);
  }
  public static setLogFile(file: string) {
    SimpleLogger.fileLogger.setLogFile(file);
  }

  public static setErrorFile(file: string) {
    SimpleLogger.fileLogger.setErrorFile(file);
  }

  public static setLogLevel(level: string) {
    SimpleLogger.stLogger.setLogLevel(level);
    SimpleLogger.fileLogger.setLogLevel(level);
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
}

let logger = new SimpleLogger("mk");
SimpleLogger.setLogLevel("debug");
logger.info("Info message");
logger.error("One error {id}", { id: "this" });
SimpleLogger.setLogLevel("critical");
logger.error("One error {id}", { id: "this" });
logger.critical("One critical {id}", { id: "this" });
