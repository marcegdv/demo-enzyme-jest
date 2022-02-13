import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import UrlButton, { UrlButtonProps } from './UrlButton';

const mockOnClick = jest.fn();
const props: UrlButtonProps ={
    text: 'Label',
    onClick: mockOnClick,
};
const component: ShallowWrapper = shallow(<UrlButton {...props}/>);

describe('UrlButton component', () => {
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    test('on click, call function', () => {
        component.simulate('click');
        expect(mockOnClick).toBeCalledTimes(1);
    });
});