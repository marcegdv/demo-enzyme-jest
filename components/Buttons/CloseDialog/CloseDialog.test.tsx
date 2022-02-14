import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CloseDialog from './CloseDialog';

/* Se crea un mock de una función, la cual se le pasa como properties al
    componente y es lo que el componente hará cuando reciba un click. */
const mockFunction = jest.fn();
/* También se usará para detectar que se pulso la tecla Enter o BarraSpc. */

/* Se renderiza el componente que se testeará */
const component: ShallowWrapper = shallow(<CloseDialog onClick={mockFunction} />);

describe('CloseDialog component', () => {
    beforeEach(() => {
        /* Antes de cada test, se resetea el mock */
        mockFunction.mockReset();
    });
    test('on click, call function', () => {
        /* Verificación de que el mock no haya sido ejecutado anteriormente */
        expect(mockFunction).toBeCalledTimes(0);
        /* Envío de un evento "click" al componente */
        component.simulate('click');
        /* Verificación de que el evento ejecutó la función (mock) */
        expect(mockFunction).toBeCalled();
        /* Verificación de que se haya ejecutado una sola vez */
        expect(mockFunction).toBeCalledTimes(1);
    });
    test('on Enter key press, call function', () => {
        /* Seteo de una property que no fue especificada al momento de crear el ShallowWrapper */
        component.setProps({onKeyPress: mockFunction});
        /* Verificación de que el mock no haya sido ejecutado anteriormente */
        expect(mockFunction).toBeCalledTimes(0);
        /* Envío de un evento "keypress" al componente */
        component.simulate('keypress', { key: 'Enter' });
        /* Verificación de que el evento ejecutó la función (mock) */
        expect(mockFunction).toBeCalled();
        /* Verificación de que se haya ejecutado una sola vez */
        expect(mockFunction).toBeCalledTimes(1);
    });
    test('on SpaceBar key press, call function', () => {
        /* Seteo de una property que no fue especificada al momento de crear el ShallowWrapper */
        component.setProps({onKeyPress: mockFunction});
        /* Verificación de que el mock no haya sido ejecutado anteriormente */
        expect(mockFunction).toBeCalledTimes(0);
        /* Envío de un evento "keypress" al componente */
        component.simulate('keypress', { key: ' ' });
        /* Verificación de que el evento ejecutó la función (mock) */
        expect(mockFunction).toBeCalled();
        /* Verificación de que se haya ejecutado una sola vez */
        expect(mockFunction).toBeCalledTimes(1);
    });
});