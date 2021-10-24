export class LogLevel {
  private constructor() {}
  public static checkLevel(inlevel: number, target: number) {
    if (typeof target == "string") return inlevel >= LogLevel.getLevel4(target);
    return inlevel >= target;
  }

  public static getLevel4(level: string) {
    let lvl = level.toLocaleLowerCase();
    switch (level) {
      case "debug":
        return 0;
      case "info":
        return 1;
      case "log":
        return 2;
      case "warn":
        return 3;
      case "error":
        return 4;
      case "critical":
        return 5;
      default:
        return 2;
    }
  }
}
