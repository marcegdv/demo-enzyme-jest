import * as testFn from '../testFunctions';

describe('testFunctions module:', () => {
    test('if window.innerWidth sets', () => {
        testFn.setWindowInnerWidth(400);
        expect(window.innerWidth).toEqual(400);
    });
    test('if global.innerWidth sets', () => {
        testFn.setGlobalInnerWidth(800);
        expect(global.innerWidth).toEqual(800);
    });
    test('if window.scrollX and window.scrollY sets', () => {
        testFn.setWindowScrollXY(10,20);
        expect(window.scrollX).toEqual(10);
        expect(window.scrollY).toEqual(20);
    });
});