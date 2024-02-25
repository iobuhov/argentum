import { join, resolve } from "node:path";
import { sh } from "./common";

export const packageRootPath = sh.pwd().toString();

export const projectPath =
    sh.env.MX_PROJECT_PATH ?? resolve(join(packageRootPath, "project"));

const moduleName = "argentum_theme_radix";

export const project = {
    path: projectPath,
    publicAssets: join(projectPath, "themesource", moduleName, "public"),
    themesource: join(projectPath, "themesource", moduleName, "web"),
    theme: join(projectPath, "theme", "web")
};

export const pkg = {
    radixui_colors: {
        src: join(packageRootPath, "node_modules", "@radix-ui", "colors"),
        dst: join(packageRootPath, "themesource", "@radix-ui", "colors")
    }
};
