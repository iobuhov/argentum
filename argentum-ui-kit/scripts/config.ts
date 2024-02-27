import { join, resolve } from "node:path";
import { sh } from "@mendix/automation-utils";

export const useWatch = process.argv.includes("--watch");

export const packageRootPath = sh.pwd().toString();

export const projectPath =
    sh.env.MX_PROJECT_PATH ?? resolve(join(packageRootPath, "project"));

const dir = (...args: string[]) => join(projectPath, ...args);

const moduleName = "argentumuikit";
const themeModuleName = "do_not_export_theme";

export const project = {
    projectPath,
    theme: dir("theme", "web"),
    publicAssets: dir("theme", "public"),
    widgets: dir("widgets"),
    module: {
        main: {
            themesource: dir("themesource", moduleName, "web")
        },
        themeModule: {
            themesource: dir("themesource", themeModuleName, "web")
        }
    },
    cleanupDirs: [dir("theme"), dir("themesource"), dir("widgets")]
};
