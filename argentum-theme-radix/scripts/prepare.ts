import { join } from "node:path";
import { copy, sh, log, glob, printStep } from "@mendix/automation-utils";
import designProps from "../design-properties/main";
import { packageRootPath } from "./config";

main();

async function main(): Promise<void> {
    createDesignProps();
    await moveRadixColors();
}

function createDesignProps() {
    printStep("Create design-properties.json");
    const designPropsDst = join(
        packageRootPath,
        "themesource",
        "design-properties.json"
    );
    new sh.ShellString(JSON.stringify(designProps, null, 2)).to(designPropsDst);
}

async function moveRadixColors() {
    printStep("Move @radix-ui/colors to themesource");
    await copy(
        glob([
            "node_modules/@radix-ui/colors/LICENSE",
            "node_modules/@radix-ui/colors/*.css"
        ]),
        join(packageRootPath, "themesource", "@radix-ui", "colors"),
        null,
        { printLimit: 5 }
    );
}
