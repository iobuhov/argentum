import * as color from "ansi-colors";
import cpy, { type Options } from "cpy";
import watch from "glob-watcher";
import { relative } from "node:path";
import * as sh from "shelljs";
import { dirs, useWatch } from "./build.config";

const log = (...args: any[]) => {
    console.log(...args);
};
const defaultCpyOptions: Options = {
    overwrite: true
};
const accent = color.blue;
const caution = color.cyan;

const running: { close: () => Promise<void> | void }[] = [];
process.on("SIGINT", async () => {
    for (const watcher of running) {
        await watcher.close();
    }
});

main();

async function main() {
    log(accent.bold("Project path:"));
    log();

    log(dirs.project);
    log();

    sh.rm("-rf", dirs.themesource);
    sh.rm("-rf", dirs.theme);
    sh.rm("-rf", dirs.widgets);

    sh.mkdir("-p", dirs.themesource);
    sh.mkdir("-p", dirs.theme);
    sh.mkdir("-p", dirs.widgets);

    log(accent.bold("Assets:"));
    log();

    const assets = [["theme/settings.json", dirs.theme]];

    for (const [src, dst] of assets) {
        await copy(src, dst);
    }
    log();

    log(accent.bold("Widgets:"));
    log();

    const widgets = [
        ["node_modules/checkbox-web/dist/*/*.mpk", dirs.widgets],
        [
            "node_modules/@mendix/argentumuikit-checkbox-group/dist/*/*.mpk",
            dirs.widgets
        ],
        ["project/__required-files__/widgets/*", dirs.widgets]
    ];

    for (const [src, dst] of widgets) {
        await copy(src, dst, { flat: true });
    }
    log();

    log(accent.bold("Styles:"));
    log();

    const argentumScss = [
        "node_modules/@xxx/argentum-ui/dist/**/*.scss",
        dirs.scss_argentum
    ] as const;
    const srcScss = ["src/styles/*.scss", dirs.themesource] as const;
    await copy(...argentumScss);
    await copy(...srcScss);

    if (useWatch) {
        log();
        copyOnChange(...argentumScss);
        copyOnChange(...srcScss);
    }
}

function copyOnChange(src: string, dst: string): void {
    log("Watching", caution(src));
    const w = watch([src]);
    running.push(w);
    w.on("change", async (path) => {
        copy(path, dst);
    });
}

async function copy(
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
