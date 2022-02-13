import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dialog from './Dialog';

const mockWindowScrollTo = jest.fn();
const mockOnClick = jest.fn();
const mockOnClickClose = jest.fn();

const dialogTitle = 'Dialog title';

describe('Dialog component', () => {
    const component: ShallowWrapper = shallow(<Dialog onClick={mockOnClick} onClickClose={mockOnClickClose}/>);
    beforeEach(() => {
        mockWindowScrollTo.mockClear();
        mockOnClick.mockReset();
        mockOnClickClose.mockReset();
        window.scrollTo = mockWindowScrollTo;
    });
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    it('with only onClickClose property set, render specific subcomponents', () => {
        expect(component.find('Paragraph')).toHaveLength(0);
        expect(component.find('CloseDialog')).toHaveLength(1);
        expect(component.find('DivButton')).toHaveLength(1);
    });
    test('when title is specified, a Paragraph is rendered', () => {
        component.setProps({topBar: dialogTitle});
        expect(component.find('Paragraph')).toHaveLength(1);
    });
    test('on click "x" close button, call function', () => {
        component.find('CloseDialog').simulate('click');
        expect(mockOnClickClose).toBeCalled();
        expect(mockOnClickClose).toBeCalledTimes(1);
    });
    test('on click close button, call function', () => {
        component.find('DivButton').simulate('click');
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
});