import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Home from '.';

import TextCard from '../../Cards/TextCard';

const mockRouter: jest.Mock = jest.fn();
jest.mock('next/router', () => ({
    ...(jest.requireActual('next/router') as any),
    useRouter: () => ({
        push: mockRouter,
        replace: mockRouter,
    }),
}));

describe('Home component:', () => {
    const component: ShallowWrapper = shallow(<Home />);
    it('render specific subcomponents', () => {
        /* Este test puede acceder a cada componente que se declaró
           en el return() de <Home/> */
        expect(component.find('Nav')).toHaveLength(1);
        expect(component.find('Main')).toHaveLength(1);
        expect(component.find('MainCards')).toHaveLength(1);
        expect(component.find('DivButton')).toHaveLength(1);
        expect(component.find('Footer')).toHaveLength(1);
        expect(component.find('Dialog')).toHaveLength(0);
        expect(component.find('DialogContent')).toHaveLength(0);
    });
    test('if MainCards render its content', () => {
        /* Pero no todos los componentes pueden ser accedidos como en
           el test anterior, ya que algunos componentes no son parte
           del return() de <Home/> que son retornados por otra función
           que luego renderizará el return() de <Home/>, y se los
           accede con la función dive() que retorna una nuevo
           ShallowWrapper a partir de ese DOM */
        const textCards = component.find('MainCards').dive().find(TextCard);
        expect(textCards).toHaveLength(2);
        expect(textCards.at(0).prop('color')).toEqual('danger');
        expect(textCards.at(1).prop('color')).toEqual('warning');
    });
    test('when click on DivButton, render Dialog', () => {
        component.find('DivButton').simulate('click');
        expect(component.find('Dialog')).toHaveLength(1);
        expect(component.find('DialogContent')).toHaveLength(1);
    });
    test('when Enter key press on DivButton, render Dialog', () => {
        component.find('DivButton').simulate('keypress', { key: 'Enter' });
        expect(component.find('Dialog')).toHaveLength(1);
        expect(component.find('DialogContent')).toHaveLength(1);
    });
    test('when SpaceBar key press on DivButton, render Dialog', () => {
        component.find('DivButton').simulate('keypress', { key: ' ' });
        expect(component.find('Dialog')).toHaveLength(1);
        expect(component.find('DialogContent')).toHaveLength(1);
    });
});

describe('When dialog is open:', () => {
    beforeEach(() => {
        mockRouter.mockReset();
    });
    /* Para testear si se le paso el contenido esperado al componente
       <Dialog/>, es necesario renderizar a <Home/> con la función
       mount(), la cual renderiza el componente que se le pasa como
       parámetro y sus subcomponentes. En las siguientes tres líneas,
       se monta el componente principal, se hace click sobre el botón
       que muestra el cuadro de diálogo, y se buscan el componente
       que renderiza el contenido del cuadro de dálogo. Luego se
       verifica si contiene lo esperado y si cumple con el
       funcionamiento deseado */
    const component: ReactWrapper = mount(<Home />);
    component.find('DivButton').simulate('click');
    const content: ReactWrapper = component.find('DialogContent');
    it('content is rendered', () => {
        expect(content.find('Paragraph')).toHaveLength(2);
        expect(content.find('LinkButton')).toHaveLength(1);
    });
    test('when click on LinkButton, go to /contact', () => {
        expect(mockRouter).toHaveBeenCalledTimes(0);
        mockRouter.mockReset();
        content.find('LinkButton').simulate('click');
        expect(mockRouter).toHaveBeenCalledTimes(1);
        expect(mockRouter).toHaveBeenCalledWith('/about');
    });
});