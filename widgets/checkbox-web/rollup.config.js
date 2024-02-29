import { join } from "path";

export default args => {
    let result = args.configDefaultConfig;
    const [jsConfig, mJsConfig] = result;

    // create target dir before any bundling to make sure casing is correct:
    // expected: com/mendix/widget/custom/Maps
    // mkdirSync(join("dist", "tmp", "widgets", "com", "mendix", "widget", "custom", "Maps"), { recursive: true });

    jsConfig.external = [...jsConfig.external, "./sdf.js"];
    jsConfig.output.paths = {
        ...jsConfig.output.paths
    };
    mJsConfig.external = [...mJsConfig.external, "./sdf.js"];
    mJsConfig.output.paths = {
        ...mJsConfig.output.paths
    };
    // delete jsConfig.output.file;
    // delete mJsConfig.output.file;
    // jsConfig.output.dir = join(__dirname, join("dist", "tmp", "widgets", "xxx", "checkbox"));
    // jsConfig.output.entryFileNames = "[name].js";
    // mJsConfig.output.dir = join(__dirname, join("dist", "tmp", "widgets", "xxx", "checkbox"));
    // mJsConfig.output.entryFileNames = "[name].mjs";

    result = [
        {
            input: join("src", "sdf.js"),
            output: { dir: join(__dirname, join("dist", "tmp", "widgets", "xxx", "checkbox")) }
        },
        ...result
    ];

    return result;
};
