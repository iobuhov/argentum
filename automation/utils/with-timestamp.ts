export function withTimestamp(
    task: (options: { since: number }) => Promise<void>
): () => Promise<void> {
    let since: number;
    return async () => {
        await task({ since });
        since = Date.now();
    };
}
