import * as colorsFn from '../colorsFunctions';

describe('colorsFunctions module:', () => {
    describe('colour() function:', () => {
        test('with existent color name, return the hexadecimal value', () => {
            expect(colorsFn.colour('red')).toEqual('#ff0000');
        });
        test('whit non existent color name, return #000', () => {
            expect(colorsFn.colour('r3d')).toEqual('#000');
        });
    });
    describe('palette() function:', () => {
        test('with existent color name, return the hexadecimal value', () => {
            expect(colorsFn.palette('dangerDark')).toEqual('#cd1223');
        });
        test('whit non existent color name, return #000', () => {
            expect(colorsFn.palette('d4ng3rD4rk')).toEqual('#000');
        });
    });
});