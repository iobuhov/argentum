import { join, resolve } from "node:path";
import { sh } from "@mendix/automation-utils";

export const packageRootPath = sh.pwd().toString();

export const projectPath =
    sh.env.MX_PROJECT_PATH ?? resolve(join(packageRootPath, "project"));

const dir = (...args: string[]) => join(projectPath, ...args);

const moduleName = "argentum_theme_radix";

export const project = {
    projectPath,
    theme: dir("theme", "web"),
    publicAssets: dir("theme", "public"),
    widgets: dir("widgets"),
    module: {
        main: {
            themesource: dir("themesource", moduleName, "web")
        }
    },
    cleanupDirs: [dir("theme"), dir("themesource"), dir("widgets")]
};
