import * as color from "chalk";
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
  danger(colorhex: string) {
    this.default.danger = color.hex(colorhex);
    return this;
  }

  critical(colorhex) {
    this.default.critical = colorhex;
    return this;
  }

  primary(colorhex) {
    this.default.primary = color.hex(colorhex);
    return this;
  }

  success(colorhex) {
    this.default.success = color.hex(colorhex);
    return this;
  }

  warning(colorhex) {
    this.default.warning = color.hex(colorhex);
    return this;
  }

  info(colorhex) {
    this.default.info = color.hex(colorhex);
    return this;
  }
  build() {
    return this.default;
  }
}
