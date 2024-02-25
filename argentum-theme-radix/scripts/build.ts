import { project } from "./config";
import { log, accent, sh, copy } from "./common";

main();

async function main() {
    log(accent.bold("Project path:"));
    log();
    log(project.path);
    log();

    sh.rm("-rf", project.themesource);
    sh.rm("-rf", project.theme);
    sh.mkdir("-p", project.themesource);
    sh.mkdir("-p", project.theme);

    log(accent.bold("Assets:"));
    log();

    await copy("theme/*", project.theme, { flat: true });
    await copy("public/*", project.publicAssets);
    await copy("LICENSE", project.themesource);
    log();

    log(accent.bold("Styles:"));
    log();

    await copy("themesource/**", project.themesource);
}
