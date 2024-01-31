import * as path from "node:path";
import * as sh from "shelljs";

let projectPath =
    sh.env.MX_PROJECT_PATH ?? path.join(sh.pwd().toString(), "../../project");
let targetPath = path.join(projectPath, "themesource/lumixui/web");
let colorsPath = path.join(targetPath, "@radix-ui/colors");

sh.rm("-rf", targetPath);

sh.mkdir("-p", targetPath);
sh.mkdir("-p", colorsPath);

// NOTE: keep `-L` flag when you copy from node_modules
sh.cp("-RL", "node_modules/@radix-ui/colors/*", colorsPath);
sh.cp("-R", "src/*", targetPath);
