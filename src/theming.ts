import chalk from "chalk";
export class ThemeBuilder {
  private default: any;

  constructor() {
    this.default = {
      danger: chalk.red,
      primary: chalk.green,
      success: chalk.black,
      warning: chalk.yellow,
      info: chalk.blue,
      critical: chalk.bgRed,
    };
  }
  danger(colorhex: string) {
    this.default.danger = (colorhex);
    return this;
  }

  critical(colorhex) {
    this.default.critical = colorhex;
    return this;
  }

  primary(colorhex) {
    this.default.primary = (colorhex);
    return this;
  }

  success(colorhex) {
    this.default.success = (colorhex);
    return this;
  }

  warning(colorhex) {
    this.default.warning = (colorhex);
    return this;
  }

  info(colorhex) {
    this.default.info = (colorhex);
    return this;
  }
  build() {
    return this.default;
  }
}
