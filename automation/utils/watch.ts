import { watch as gulpWatch } from "gulp";
import { Globs } from "./glob";
import { log, caution } from "./print";

const running: { close: () => void }[] = [];

export function watchCleanup() {
    for (const watcher of running) {
        watcher.close();
    }
}

export function watch(patterns: Globs, fn: () => Promise<void> | void): void {
    const watcher = gulpWatch(patterns, fn).on("ready", () => {
        const paths = Array.isArray(patterns)
            ? patterns.map(caution)
            : [caution(patterns)];
        log("Waiting for changes in", ...paths);
    });

    running.push(watcher);
}

export function watchHook() {
    process.on("SIGINT", () => {
        watchCleanup();
        process.exit(0);
    });
}
