import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DivButton, { DivButtonProps } from './DivButton';

const mockFunction = jest.fn();

const buttonText = 'Text button';
const props: DivButtonProps = {
    text: buttonText,
    onClick: mockFunction,
};

const component: ShallowWrapper = shallow(<DivButton {...props}/>);

describe('DivButton component', () => {
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
        component.setProps({onKeyPress: mockFunction});
        expect(mockFunction).toBeCalledTimes(0);
        component.simulate('keypress', { key: 'Enter' });
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(1);
    });
    test('on SpaceBar key press, call function', () => {
        component.setProps({onKeyPress: mockFunction});
        expect(mockFunction).toBeCalledTimes(0);
        component.simulate('keypress', { key: ' ' });
        expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(1);
    });
});