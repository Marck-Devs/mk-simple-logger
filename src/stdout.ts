import { Formatter } from "./utils";
import { ThemeBuilder } from "./theming";
import { LogLevel } from "./levels";

export class StLogger {
  private theme: any;
  private format: string = "{date} - [ {level} ] - {msg}";
  private loglevel: number;
  private dateFormat: string =
    "{weekDay} {day}/{month}/{year} : {hour}:{min}:{sec}";
  private static _instance: StLogger;

  private constructor(them: ThemeBuilder) {
    this.theme = them.build();
  }

  public static getLogger() {
    if (!StLogger._instance)
      StLogger._instance = new StLogger(new ThemeBuilder());
    return StLogger._instance;
  }

  private buildEssentials(obj: any) {
    let date = new Date();
    let out = obj;
    let dateObj = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      y: date.getFullYear() % 100,
      hour: date.getHours(),
      min: date.getMinutes(),
      sec: date.getSeconds(),
      mil: date.getMilliseconds(),
      weekDay: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"][
        date.getDay()
      ],
    };
    out.date = Formatter.formatObj(this.dateFormat, dateObj);
    return out;
  }

  private check(lvl: string) {
    return LogLevel.checkLevel(LogLevel.getLevel4(lvl), this.loglevel);
  }

  public info(msg: string, data: object = {}) {
    if (!this.check("info")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = this.theme.info("INFO");
    let line = Formatter.formatObj(this.format, _data);
    console.log(line);
  }

  public warn(msg: string, data: object = {}) {
    if (!this.check("warn")) return;
    let _data: any = data;
    _data.msg = this.theme.warning(Formatter.formatObj(msg, data));
    _data = this.buildEssentials(_data);
    _data.level = this.theme.warning("WARN");
    let line = Formatter.formatObj(this.format, _data);
    console.log(line);
  }

  public error(msg: string, data: object = {}) {
    if (!this.check("error")) return;
    let _data: any = data;
    _data.msg = this.theme.danger(Formatter.formatObj(msg, data));
    _data = this.buildEssentials(_data);
    _data.level = this.theme.danger("ERROR");
    let line = Formatter.formatObj(this.format, _data);
    console.error(line);
  }

  public log(msg: string, data: object = {}) {
    if (!this.check("log")) return;
    let _data: any = data;
    _data.msg = this.theme.danger(Formatter.formatObj(msg, data));
    _data = this.buildEssentials(_data);
    _data.level = this.theme.danger("LOG");
    let line = Formatter.formatObj(this.format, _data);
    console.log(line);
  }

  public critical(msg: string, data: object = {}) {
    if (!this.check("critical")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = "CRITICAL";
    let line = Formatter.formatObj(this.format, _data);
    console.error(this.theme.critical.bold(line));
  }

  public debug(msg: string, data: object = {}) {
    if (!this.check("debug")) return;
    let _data: any = data;
    _data.msg = Formatter.formatObj(msg, data);
    _data = this.buildEssentials(_data);
    _data.level = this.theme.primary("DEBUG");
    let line = Formatter.formatObj(this.format, _data);
    console.log(line);
  }

  public setFortmat(format): StLogger {
    this.format = format;
    return this;
  }

  public setDateFormat(format): StLogger {
    this.dateFormat = format;
    return this;
  }

  public setTheme(themBuild: ThemeBuilder) {
    this.theme = themBuild.build();
    return this;
  }
  public setLogLevel(lvl: string): StLogger {
    this.loglevel = LogLevel.getLevel4(lvl);
    return this;
  }
}
