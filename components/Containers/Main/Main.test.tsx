import React from 'react';
import { render, shallow, ShallowWrapper } from 'enzyme';
import Main from './Main';

const text = 'Hello World!'
const children: React.ReactElement = <span>{text}</span>;
const component: ShallowWrapper = shallow(
    <Main>
        {children}
    </Main>
);

describe('Main component', () => {
    /* Además de buscar componentes, se puede buscar el tag JSX que
       representa al tag HTML */
    it('render html tag: main', () => {
        expect(component.find('main')).toHaveLength(1);
    });
    it('render html tag: div', () => {
        expect(component.find('div')).toHaveLength(1);
    });
    /* Y pedir las propiedades de un tag en particular */
    test('if children was rendered', () => {
        expect(component.find('span')).toHaveLength(1);
        expect(component.find('span').prop('children')).toEqual(text);
    });
});