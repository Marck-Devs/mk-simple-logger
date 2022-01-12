export class Formatter {
  /**
   *
   */
  constructor() {}

  public static formatObj(line: string, data: any): string {
    let keys = Object.keys(data);
    let out = line;
    if (!out) {
      out = "";
    }
    for (let k of keys) {
      out = out.replace(new RegExp("\\{" + k + "\\}", "gi"), data[k]);
    }
    return out;
  }
  public static format(line: string, ...args): string {
    let keys = Object.keys(args);
    let out = line;
    if (!out) {
      out = "";
    }
    for (let k in keys) {
      out = out.replace(new RegExp("\\{" + k + "\\}", "gi"), args[k]);
    }
    return out;
  }
}
