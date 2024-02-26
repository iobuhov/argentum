import * as color from "ansi-colors";

export const accent = color.green;
export const caution = color.cyan;
export const shadow = color.gray;
export const em = color.bold;

export const t = () =>
    `${shadow(new Date().toLocaleTimeString())} ${shadow("┆")}`;

export const log = (...args: any[]) => console.log(t(), ...args);

export function printStep(step: any): void {
    log(accent.bold(step));
}

export function printSub(...args: any[]): void {
    log("  ", ...args);
}
