export const debouncer = (nonDebouncedFn, debounceTime) => {
    let timer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            nonDebouncedFn.apply(context, args);
        }, debounceTime);
    }
}