import { deleteAsync } from "del";
import { Globs } from "./glob";
import { printSub, shadow } from "./print";

export { deleteAsync } from "del";

export async function clean(pattern: string | string[] | Globs) {
    const deleted = await deleteAsync(pattern, {
        force: true,
        onlyFiles: false
    });
    deleted.forEach((p) => printSub(shadow(p)));
}
