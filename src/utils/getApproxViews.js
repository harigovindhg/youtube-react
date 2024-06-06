export const getApproxViews = (rawViewCount) => {
    if (Math.floor(rawViewCount / 1000) === 0) {
        return `${rawViewCount}`;
    } else if (Math.floor(rawViewCount / 1000) > 0 && Math.floor(rawViewCount / 1000) <= 999) {
        return `${Math.floor(rawViewCount / 1000)}K`;
    } else if (Math.floor(rawViewCount / 1000000) > 0) {
        return `${Math.round((rawViewCount / 1000000) * 100) / 100}M`;
    }
}