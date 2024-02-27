import { project } from "./config";
import {
    clean,
    printStep,
    type CopyOptions,
    glob,
    copy
} from "@mendix/automation-utils";

main();

async function main() {
    await cleanup();
    await copyAssets();
    await copyTheme();
    await copyThemesource();
}

async function cleanup() {
    printStep("Remove directories");
    return clean(project.cleanupDirs);
}

async function copyAssets(options?: CopyOptions) {
    printStep("Copy public assets");
    await copy(
        glob("public/**/*"),
        project.publicAssets,
        project.projectPath,
        options
    );
}

async function copyTheme(options?: CopyOptions) {
    printStep("Copy theme files");
    await copy(glob("theme/**/*"), project.theme, project.projectPath, options);
}

async function copyThemesource(options?: CopyOptions) {
    printStep("Copy themesource files");
    await copy(
        glob(["LICENSE", "themesource/**/*"]),
        project.module.main.themesource,
        project.projectPath,
        options
    );
}
