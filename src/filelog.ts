import { Formatter } from "./utils";
import { appendFileSync } from "fs";
import { LogLevel } from "./levels";
import { makeDateObject } from "./commons/date-utils";

export class FileLogger {
  private format: string = "{date} - [ {level} ] - {msg}";
  private errorFile: string;
  private logFile: string;
  private loglevel: number;
  private dateFormat: string =
    "{weekDay} {day}/{month}/{year} : {hour}:{min}:{sec}";
  private static _instance: FileLogger;

  private constructor() { }

  public static getLogger() {
    if (!FileLogger._instance) FileLogger._instance = new FileLogger();
    return FileLogger._instance;
  }

  private buildEssentials(obj: any) {
    let out = obj;
    let dateObj = makeDateObject();
    out.date = Formatter.formatObj(this.dateFormat, dateObj);
    return out;
  }
  private check(lvl: string) {
    return LogLevel.checkLevel(LogLevel.getLevel4(lvl), this.loglevel);
  }
  private writeLog(line: string): void {
    if (!this.logFile) {
      console.error("LogFile not set");
      return;
    }
    appendFileSync(this.logFile, line + "\n");
  }
  private writeError(line: string): void {
    if (!this.errorFile) {
      this.writeLog(line);
    } else {
      appendFileSync(this.errorFile, line + "\n");
    }
  }

  public info(msg: string, data: object = {}) {
    if (!this.check("info")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "INFO";
    let line = Formatter.formatObj(this.format, _data);
    this.writeLog(line);
  }

  public warn(msg: string, data: object = {}) {
    if (!this.check("warn")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "WARN";
    let line = Formatter.formatObj(this.format, _data);
    this.writeLog(line);
  }

  public log(msg: string, data: object = {}) {
    if (!this.check("log")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "LOG";
    let line = Formatter.formatObj(this.format, _data);
    this.writeLog(line);
  }

  public error(msg: string, data: object = {}) {
    if (!this.check("error")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "ERROR";
    let line = Formatter.formatObj(this.format, _data);
    this.writeError(line);
  }

  public critical(msg: string, data: object = {}) {
    if (!this.check("critical")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "CRITICAL";
    let line = Formatter.formatObj(this.format, _data);
    ``;
    this.writeError(line);
  }

  public debug(msg: string, data: object = {}) {
    if (!this.check("debug")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "DEBUG";
    let line = Formatter.formatObj(this.format, _data);
    this.writeLog(line);
  }

  public setFormat(format): FileLogger {
    this.format = format;
    return this;
  }

  public setDateFormat(format): FileLogger {
    this.dateFormat = format;
    return this;
  }
  public setLogFile(file: string): FileLogger {
    this.logFile = file;
    return this;
  }

  public setErrorFile(file: string): FileLogger {
    this.errorFile = file;
    return this;
  }
  public setLogLevel(lvl: string): FileLogger {
    this.loglevel = LogLevel.getLevel4(lvl);
    return this;
  }
}
