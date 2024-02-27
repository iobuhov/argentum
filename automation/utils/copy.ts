import map from "easy-transform-stream";
import { SrcOptions } from "vinyl-fs";
import { dest, src } from "gulp";
import * as Vinyl from "vinyl";
import { Globs } from "./glob";
import { accent, em, log, printSub, shadow } from "./print";
import exhaustively from "stream-exhaust";

function lineAcc(n) {
    let skipped = 0;
    const data = [];
    return {
        add: (s: string) => {
            if (data.length < n) {
                data.push(s);
            } else {
                skipped++;
            }
        },
        print: () => {
            data.forEach((line) => printSub(shadow(line)));
            if (skipped > 0) {
                printSub(shadow(`... ${skipped} more items`));
            }
        }
    };
}

const PRINT_LIMIT = process.env.DEBUG ? Infinity : 10;

export type CopyOptions = SrcOptions & { printLimit?: number };

/**
 * Copy files. This is just wrapper around gulp.src/gulp.dst.
 * Also we use since timestamp to copy only changed files in watch mode.
 * If project path is present we check that destination is within that path.
 */
export async function copy(
    pattern: Globs,
    dst: string,
    projectPath?: string | null,
    options?: CopyOptions
): Promise<void> {
    options = { printLimit: PRINT_LIMIT, ...options };
    const p = new Promise<void>((res, rej) => {
        if (projectPath) {
            if (!dst.startsWith(projectPath)) {
                throw new Error("Destination is out of project path");
            }
            printSub(shadow(em("Project path:")), projectPath);
        }

        let n = 0;
        const buffer = lineAcc(options.printLimit);
        const finish = () =>
            map({ objectMode: true }, async (file: Vinyl) => {
                if (file.isDirectory()) {
                    return file;
                }

                n++;
                let path: string;
                if (projectPath) {
                    file.base = projectPath;
                    path = file.relative;
                } else {
                    path = file.path;
                }
                buffer.add(path);
                return file;
            });

        src(pattern, options)
            .pipe(dest(dst))
            // After dest we can print copied fils.
            // Bea aware, we transform file base - don't use any .pipe after
            // this stream.
            // exhaustively - We have to use it to "drain" stream and see all files.
            .pipe(exhaustively(finish()))
            .on("error", rej)
            .on("finish", () => {
                buffer.print();
                log(em(`${accent(n.toString())} file(s) copied`));
                res();
            });
    });

    return p;
}
