import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextButton, { TextButtonProps } from './TextButton';

const mockOnClick = jest.fn();
const props: TextButtonProps = {
    onClick: mockOnClick,
    children: 'X',
};

const component: ShallowWrapper = shallow(<TextButton {...props}/>);

describe('TextButton component', () => {
    beforeEach(() => {
        mockOnClick.mockReset();
    });
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    test('on click, call function', () => {
        component.simulate('click');
        expect(mockOnClick).toBeCalled();
    });
});