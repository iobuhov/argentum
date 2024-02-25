import * as color from "ansi-colors";
import cpy, { type Options } from "cpy";
import { relative } from "node:path";
export * as sh from "shelljs";

export const accent = color.blue;
export const caution = color.cyan;
export const log = (...args: any[]) => {
    console.log(...args);
};

const defaultCpyOptions: Options = {
    overwrite: true
};

export async function copy(
    src: Parameters<typeof cpy>[0],
    dst: Parameters<typeof cpy>[1],
    options?: Parameters<typeof cpy>[2]
): Promise<[string, string][]> {
    const copied = new Map();
    await cpy(src, dst, { ...defaultCpyOptions, ...options }).on(
        "progress",
        ({ sourcePath, destinationPath }) => {
            if (!copied.has(sourcePath)) {
                copied.set(sourcePath, destinationPath);
            }
        }
    );

    const result = Array.from(copied.entries());
    result.forEach((ent) => printEntry(...ent));
    return result;
}

function printEntry(src: string, dst: string): void {
    if (process.env.DEBUG) {
        log(color.green("copy"), relPath(src));
    }
    log(accent(">"), relPath(dst));
}

function relPath(path: string): string {
    return relative(process.cwd(), path);
}
