import * as cpx from "cpx";
import * as sh from "shelljs";
import {
    colorsPath,
    sourcePath,
    themePath,
    projectPath,
    useWatch
} from "./vars";

const log = (...args: any[]) => console.log("[build]", ...args);

log("project path:", projectPath);

sh.rm("-rf", sourcePath);

sh.mkdir("-p", themePath);
sh.mkdir("-p", sourcePath);
sh.mkdir("-p", colorsPath);

log("copy @radix-ui/colors");
// NOTE: keep `-L` flag when you copy from node_modules
sh.cp("-RL", "node_modules/@radix-ui/colors/*", colorsPath);

log("copy settings.json");
sh.cp("-fu", "theme/settings.json", themePath);

if (useWatch) {
    cpx.watch("src/**/*.scss", sourcePath, { clean: true })
        .on("watch-ready", () => {
            log("watching src...");
        })
        .on("copy", (e) => log(`copy ${e.srcPath} => ${e.dstPath}`));
} else {
    log("copy src files");
    sh.cp("-R", "src/*", sourcePath);
}
