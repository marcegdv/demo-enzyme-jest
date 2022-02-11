import getColor, { colors } from './Colors';

describe('Colors component', () => {
    it('return the specified color in hexadecimal from preset colors', () => {
        expect(getColor('danger')).toEqual(colors.danger);
    });
    test('if no color given, return the hexadecimal from preset colors called "normal"', () => {
        expect(getColor()).toEqual(colors.normal);
    });
    test('if color given is not in the preset list, return the given color', () => {
        expect(getColor('red')).toEqual('red');
    });
});