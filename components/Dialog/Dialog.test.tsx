import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Dialog from './Dialog';

/* El siguiente mock es utilizado para reemplazar la funcionalidad
   del navegador que no esta incluida cuando se ejecutan los test
   en Jest. Para ver el error, comenta las líneas 8, 17 y 20. */
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
    it('with only onClick and onClickClose properties, render specific subcomponents', () => {
        expect(component.find('Paragraph')).toHaveLength(0);
        expect(component.find('CloseDialog')).toHaveLength(1);
        expect(component.find('DivButton')).toHaveLength(1);
    });
    /* Renderizado condicional para el título del diálogo */
    test('when title is specified, a <Paragraph/> is rendered', () => {
        expect(component.find('Paragraph')).toHaveLength(0);
        component.setProps({topBar: dialogTitle});
        expect(component.find('Paragraph')).toHaveLength(1);
    });
    test('on click "x" close button, call function', () => {
        expect(mockOnClickClose).toBeCalledTimes(0);
        component.find('CloseDialog').simulate('click');
        expect(mockOnClickClose).toBeCalled();
        expect(mockOnClickClose).toBeCalledTimes(1);
    });
    test('when Enter key pess over "x" button, dialog call function', () => {
        expect(mockOnClickClose).toBeCalledTimes(0);
        component.find('CloseDialog').simulate('keypress', { key: 'Enter' });
        expect(mockOnClickClose).toBeCalled();
        expect(mockOnClickClose).toBeCalledTimes(1);
    });
    test('when SpaceBar key pess over "x" button, dialog call function', () => {
        expect(mockOnClickClose).toBeCalledTimes(0);
        component.find('CloseDialog').simulate('keypress', { key: ' ' });
        expect(mockOnClickClose).toBeCalled();
        expect(mockOnClickClose).toBeCalledTimes(1);
    });
    test('on click close button, call function', () => {
        expect(mockOnClick).toBeCalledTimes(0);
        component.find('DivButton').simulate('click');
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
    test('when Enter key pess over "x" button, dialog call function', () => {
        expect(mockOnClick).toBeCalledTimes(0);
        component.find('DivButton').simulate('keypress', { key: 'Enter' });
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
    test('when SpaceBar key pess over "x" button, dialog call function', () => {
        expect(mockOnClick).toBeCalledTimes(0);
        component.find('DivButton').simulate('keypress', { key: ' ' });
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
});