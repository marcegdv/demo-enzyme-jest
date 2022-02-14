import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CloseDialog from './CloseDialog';

/*
    Se crea un mock de una función, la cual se le pasa como properties al
    componente y es lo que el componente hará cuando reciba un click.    
*/
const mockOnClick = jest.fn();

/*
    Se renderiza el componente que se testeará
*/
const component: ShallowWrapper = shallow(<CloseDialog onClick={mockOnClick}/>);

describe('CloseDialog component', () => {
    beforeEach(() => {
        mockOnClick.mockReset();
    });
    test('on click, call function', () => {
        expect(mockOnClick).toBeCalledTimes(0);
        component.simulate('click');
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
});