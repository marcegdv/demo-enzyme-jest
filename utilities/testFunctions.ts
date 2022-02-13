export const setWindowInnerWidth = (width: number = 767) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};
export const setGlobalInnerWidth = (width: number = 767) => {
    //global.innerWidth = 767;
    Object.defineProperty(global, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
};

export const setWindowScrollXY = (x: number, y: number) => {
    if (x) {
        Object.defineProperty(window, 'scrollX', {
            writable: true,
            configurable: true,
            value: x,
        });
    };
    if (y) {
        Object.defineProperty(window, 'scrollY', {
            writable: true,
            configurable: true,
            value: y,
        });
    };
};