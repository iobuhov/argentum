const useWatch = process.argv.includes("--watch");

const config = {
    logLevel: "info",
    entryPoints: ["./src/**/*.ts", "./src/**/*.tsx"],
    outdir: "dist",
    outbase: "src"
};

const args = [
    "esbuild",
    ...config.entryPoints,
    `--outbase=${config.outbase}`,
    `--outdir=${config.outdir}`,
    `--log-level=${config.logLevel}`
];

if (useWatch) {
    args.push("--watch");
}

require("node:child_process").spawn("pnpm", args, { stdio: "inherit" });
