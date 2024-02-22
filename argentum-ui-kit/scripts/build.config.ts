import { join, resolve } from "node:path";
import * as sh from "shelljs";

export const useWatch = process.argv.includes("--watch");

export const packageRootPath = sh.pwd().toString();

export const projectPath =
    sh.env.MX_PROJECT_PATH ?? resolve(join(packageRootPath, "project"));

const moduleName = "argentumuikit";

const themesource = join(projectPath, "themesource", moduleName, "web");

export const dirs = {
    project: projectPath,
    themesource,
    scss_argentum: join(themesource, "@xxx/argentum-ui"),
    theme: join(projectPath, "theme/web"),
    widgets: join(projectPath, "widgets")
};
