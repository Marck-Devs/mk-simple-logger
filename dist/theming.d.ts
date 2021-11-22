export declare class ThemeBuilder {
    private default;
    constructor();
    danger(colorhex: string): this;
    critical(colorhex: any): this;
    primary(colorhex: any): this;
    success(colorhex: any): this;
    warning(colorhex: any): this;
    info(colorhex: any): this;
    build(): any;
}
