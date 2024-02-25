import { pkg } from "./config";
import { copy, sh, log } from "./common";

main();
async function main(): Promise<void> {
    log("Move @radix-ui/colors to themesource");
    log();

    sh.mkdir("-p", pkg.radixui_colors.dst);
    await copy(
        [
            `${pkg.radixui_colors.src}/LICENSE`,
            `${pkg.radixui_colors.src}/*.css`
        ],
        pkg.radixui_colors.dst
    );
}
