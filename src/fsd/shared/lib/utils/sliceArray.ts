export const sliceArray = <T>(items: T[], limit: number | undefined): T[] => {
    if (limit !== undefined) {
        return items.slice(0, limit);
    }
    return items;
};