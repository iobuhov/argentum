/**
 * Note that glob patterns can only contain forward-slashes, not backward-slashes,
 * so if you want to construct a glob pattern from path components,
 * you need to use path.posix.join() instead of path.join().
 */
export type Glob = string & {
    __globTag: never;
};

export type Globs = Glob | Glob[];

export function glob(pattern: string[]): Glob[];
export function glob(pattern: string): Glob;
export function glob(pattern: string | string[]): Glob | Glob[] {
    const assertGlob = (str: string) => {
        if (pattern.includes("\\")) {
            throw new Error(`Invalid glob: ${pattern}`);
        }
    };

    if (Array.isArray(pattern)) {
        pattern.forEach(assertGlob);
        return pattern as Glob[];
    }

    assertGlob(pattern);
    return pattern as Glob;
}
