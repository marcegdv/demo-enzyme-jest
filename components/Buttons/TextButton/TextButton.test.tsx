import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextButton, { TextButtonProps } from './TextButton';

const mockFunction = jest.fn();

const props: TextButtonProps = {
    onClick: mockFunction,
    onKeyPress: mockFunction,
    children: 'X',
};
const component: ShallowWrapper = shallow(<TextButton {...props} />);

describe('TextButton component', () => {
    beforeEach(() => {
        mockFunction.mockReset();
    });
    test('on click, call function', () => {
        expect(mockFunction).toBeCalledTimes(0);
        component.simulate('click');
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(1);
    });
    test('on Enter key press, call function', () => {
        expect(mockFunction).toBeCalledTimes(0);
        component.simulate('keypress', { key: 'Enter' });
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(1);
    });
    test('on SpaceBar key press, call function', () => {
        expect(mockFunction).toBeCalledTimes(0);
        component.simulate('keypress', { key: ' ' });
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(1);
    });
});