import * as path from "node:path";
import * as sh from "shelljs";

export const useWatch = process.argv.includes("--watch");

export const packagePath = sh.pwd().toString();

export const projectPath =
    sh.env.MX_PROJECT_PATH ??
    path.resolve(path.join(packagePath, "../../project"));

export const sourcePath = path.join(projectPath, "themesource/lumixui/web");

export const themePath = path.join(projectPath, "theme/web");

export const colorsPath = path.join(sourcePath, "@radix-ui/colors");
