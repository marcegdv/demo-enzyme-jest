import React from 'react';
import { render, shallow, ShallowWrapper } from 'enzyme';
import Main from './Main';

//comentar
const text = 'Hello World!'
const children: React.ReactElement = <span>{text}</span>;
const component: ShallowWrapper = shallow(
    <Main>
        {children}
    </Main>
);

describe('Main component', () => {
    it('is rendered', () => {
        expect(component).toBeTruthy; //comentar
    });
    it('render html tag: main', () => {
        expect(component.find('main')).toHaveLength(1);
    });
    it('render html tag: div', () => {
        expect(component.find('div')).toHaveLength(1);
    });
    test('if children was rendered', () => {
        expect(component.find('span')).toHaveLength(1);
        expect(component.find('span').prop('children')).toEqual(text);
    });
});