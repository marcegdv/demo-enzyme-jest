import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { setGlobalInnerWidth } from '../../../utilities/testFunctions';
import Nav from './Nav';

const title = 'Hello World!';
const component: ShallowWrapper = shallow(<Nav />);

describe('Nav component', () => {
    it('render subcomponents', () => {
        expect(component.find('Paragraph')).toHaveLength(1);
    });
    /* Si no se especifica la propiedad 'title', no se renderiza, de lo
       contrario, habrá dos componentes <Paragraph/> extras al momento
       de renderizar el componente <Nav/> */
    test('if title is specified, component use two more Paragraph', () => {
        component.setProps({title: title});
        expect(component.find('Paragraph')).toHaveLength(3);
    });
    /* El componente <Nav/> responde a dos anchos de pantalla distintos. En
       este caso, si el ancho es mayor o igual a 768 píxeles, renderizará
       el <Paragraph/> con el tamaño de la fuente seteado en 48 */
    test('if render the correct size title for desktop style', () => {
        setGlobalInnerWidth(768);
        component.setProps({title: title});
        expect(component.find('Paragraph').at(0).prop('size')).toEqual(48);
    });
    /* Y si es el ancho es menor a 768 píxeles, renderizará el <Paragraph/>
       con el tamaño de la fuente seteado en 24 */
    test('if render the correct size title for desktop style', () => {
        setGlobalInnerWidth(767);
        component.setProps({title: title});
        expect(component.find('Paragraph').at(1).prop('size')).toEqual(24);
    });
});