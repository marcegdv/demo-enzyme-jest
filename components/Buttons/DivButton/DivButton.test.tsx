import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DivButton, { DivButtonProps } from './DivButton';

//comentar
const mockOnClick = jest.fn();
const buttonText = 'Text button';
const props: DivButtonProps = {
    text: buttonText,
    onClick: mockOnClick,
};

const component: ShallowWrapper = shallow(<DivButton {...props}/>);

describe('DivButton component', () => {
    beforeEach(() => {
        mockOnClick.mockReset();
    });
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    test('on click, call function', () => {
        component.simulate('click');
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
});