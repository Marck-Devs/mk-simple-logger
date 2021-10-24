import * as color from "ansi-colors";
export class ThemeBuilder {
  private default: any;

  constructor() {
    this.default = {
      danger: color.red,
      primary: color.green,
      success: color.bgGreen.black,
      warning: color.yellow,
      info: color.blue,
      critical: color.bgRed.whiteBright,
    };
  }
  danger(color) {
    this.default.danger = color;
    return this;
  }

  critical(color) {
    this.default.critical = color;
    return this;
  }

  primary(color) {
    this.default.primary = color;
    return this;
  }

  success(color) {
    this.default.success = color;
    return this;
  }

  warning(color) {
    this.default.warning = color;
    return this;
  }

  info(color) {
    this.default.info = color;
    return this;
  }
  build() {
    return this.default;
  }
}
