import { globby } from "globby";
import { spawn } from "node:child_process";
const useWatch = process.argv.includes("--watch");

const config = {
    logLevel: "info",
    entryPoints: ["./src/**/*.ts", "./src/**/*.tsx"],
    outdir: "dist",
    outbase: "src"
};

const files = await globby(config.entryPoints);

const args = [
    "esbuild",
    ...files,
    `--outbase=${config.outbase}`,
    `--outdir=${config.outdir}`,
    `--log-level=${config.logLevel}`
];

if (useWatch) {
    args.push("--watch");
}

spawn("pnpm", args, { stdio: "inherit" });
