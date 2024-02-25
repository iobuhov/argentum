import { join, resolve } from "node:path";
import * as sh from "shelljs";

export const useWatch = process.argv.includes("--watch");

export const packageRootPath = sh.pwd().toString();

export const projectPath =
    sh.env.MX_PROJECT_PATH ?? resolve(join(packageRootPath, "project"));

const moduleName = "argentumuikit";
const themeModuleName = "do_not_export_theme";

export const project = {
    root: projectPath,
    theme: join(projectPath, "theme", "web"),
    publicAssets: join(projectPath, "theme", "public"),
    widgets: join(projectPath, "widgets"),
    module: {
        main: {
            themesource: join(projectPath, "themesource", moduleName, "web")
        },
        themeModule: {
            themesource: join(
                projectPath,
                "themesource",
                themeModuleName,
                "web"
            )
        }
    }
};

export const cleanup = () => {
    sh.rm("-rf", project.theme);
    sh.rm("-rf", project.publicAssets);
    sh.rm("-rf", project.widgets);
    sh.rm("-rf", project.module.main.themesource);
    sh.rm("-rf", project.module.themeModule.themesource);
};

export const setup = () => {
    sh.mkdir("-p", project.theme);
    sh.mkdir("-p", project.publicAssets);
    sh.mkdir("-p", project.widgets);
    sh.mkdir("-p", project.module.main.themesource);
    sh.mkdir("-p", project.module.themeModule.themesource);
};

export const uikitStyles = {
    src: "node_modules/@xxx/argentum-ui/dist/**/*.scss",
    dst: join(project.module.main.themesource, "@xxx", "argentum-ui")
};

export const stylesMain = {
    src: join(packageRootPath, "themesource", "main.scss"),
    dst: project.module.main.themesource
};

export const widgets = [
    {
        src: "node_modules/checkbox-web/dist/*/*.mpk",
        dst: project.widgets
    },
    {
        src: "node_modules/@mendix/argentumuikit-checkbox-group/dist/*/*.mpk",
        dst: project.widgets
    },
    {
        src: "project/__required-files__/widgets/*",
        dst: project.widgets
    }
];

// This files is for preview only and should never be included in module.
export const themeModuleFiles = [
    // Themesource
    {
        src: "node_modules/@mendix/argentum-theme-radix/themesource/**/*",
        dst: join(projectPath, "themesource", themeModuleName, "web")
    },
    // Public assets
    {
        src: "node_modules/@mendix/argentum-theme-radix/public/**",
        dst: project.publicAssets
    },
    // Theme fils
    {
        src: "node_modules/@mendix/argentum-theme-radix/theme/**",
        dst: project.theme
    }
];
