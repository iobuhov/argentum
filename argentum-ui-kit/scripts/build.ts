import {
    copy,
    type CopyOptions,
    glob,
    clean,
    printStep,
    watch,
    watchHook,
    withTimestamp,
    printSub,
    shadow
} from "@mendix/automation-utils";
import { project, useWatch } from "./config";

main();

function main() {
    if (useWatch) {
        dev();
    } else {
        build();
    }
}

async function build() {
    await cleanup();
    await copyAssets();
    await copyWidgets();
    await copyTheme();
    await copyThemesource();
}

async function dev() {
    const [lazyCopyAssets, lazyCopyTheme, lazyCopyThemesource] = [
        withTimestamp(copyAssets),
        withTimestamp(copyTheme),
        withTimestamp(copyThemesource)
    ];
    await cleanup();
    await lazyCopyAssets();
    await lazyCopyTheme();
    await lazyCopyThemesource();

    watchHook();
    watch(
        glob("node_modules/@mendix/argentum-theme-radix/public/**/*"),
        lazyCopyAssets
    );
    watch(
        glob("node_modules/@mendix/argentum-theme-radix/theme/**/*"),
        lazyCopyTheme
    );
    watch(
        glob("node_modules/@mendix/argentum-theme-radix/themesource/**/*"),
        lazyCopyThemesource
    );
}

async function cleanup() {
    printStep("Remove directories");
    return clean(project.cleanupDirs);
}

/**
 * Don't use this function for dev task.
 * Widgets has it's onw tools. We use this function
 * only for build purposes.
 */
async function copyWidgets() {
    printStep("Copy widgets");
    await copy(
        glob([
            "./project/__required-files__/widgets/*",
            "node_modules/checkbox-web/dist/*/*.mpk",
            "node_modules/@mendix/argentumuikit-checkbox-group/dist/*/*.mpk"
        ]),
        project.widgets,
        project.projectPath,
        { flat: true }
    );
}

async function copyAssets(options?: CopyOptions) {
    printStep("Copy public assets");
    await copy(
        glob("node_modules/@mendix/argentum-theme-radix/public/**/*"),
        project.publicAssets,
        project.projectPath,
        options
    );
}

async function copyTheme(options?: CopyOptions) {
    printStep("Copy theme files");
    await copy(
        glob("node_modules/@mendix/argentum-theme-radix/theme/**/*"),
        project.theme,
        project.projectPath,
        options
    );
}

async function copyThemesource(options?: CopyOptions) {
    printStep("Copy themesource files");
    await copy(
        glob("node_modules/@mendix/argentum-theme-radix/themesource/**/*"),
        project.module.themeModule.themesource,
        project.projectPath,
        options
    );
}
