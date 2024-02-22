import * as cpx from "cpx";
import * as sh from "shelljs";
import { dirs, useWatch } from "./build.config";
import * as color from "ansi-colors";

const log = (...args: any[]) =>
    console.log(color.bold.bgBlue(" build "), ...args);

process.on("SIGINT", () => process.exit(0));

main();

async function main() {
    log(color.bold.blue("Project path:"));
    log(dirs.project);
    log();

    sh.rm("-rf", dirs.themesource);
    sh.rm("-rf", dirs.theme);
    sh.rm("-rf", dirs.widgets);

    sh.mkdir("-p", dirs.themesource);
    sh.mkdir("-p", dirs.theme);
    sh.mkdir("-p", dirs.widgets);

    // log("copy @radix-ui/colors");
    // sh.cp("-RL", "node_modules/@radix-ui/colors/*", colorsPath);
    const files = [
        ["theme/settings.json", dirs.theme],
        ["node_modules/checkbox-web/dist/*/*.mpk", dirs.widgets],
        ["project/__required-files__/widgets/*", dirs.widgets]
    ];

    // NOTE: keep `-L` flag when you copy from node_modules
    log("Copy assets");
    for (const [src, dst] of files) {
        log(color.gray(src));
        sh.cp("-fuL", src, dst);
    }
    log();

    await Promise.all([
        copy(
            "node_modules/@xxx/argentum-ui/dist/**/*.scss",
            dirs.scss_argentum,
            useWatch
        ),
        copy("src/styles/*.scss", dirs.themesource, useWatch)
    ]);

    process.exit(0);
}

function copy(glob: string, dst: string, useWatch = false): Promise<void> {
    let finish: () => void;
    const lock = new Promise<void>((res) => (finish = res));
    if (useWatch) {
        log("Start watching", color.magenta(glob));
    }
    cpx.watch(glob, dst, { clean: true })
        .on("copy", (e) => {
            log(color.green("copy"), color.gray(`${e.srcPath}`));
            log(color.green("  =>"), color.gray(e.dstPath));
        })
        .on("watch-ready", () => {
            if (!useWatch) {
                finish();
            }
        });
    return lock;
}
