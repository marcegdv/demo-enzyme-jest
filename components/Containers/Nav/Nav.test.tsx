import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { setGlobalInnerWidth } from '../../../utilities/testFunctions';
import Nav from './Nav';

const title = 'Hello World!';
const component: ShallowWrapper = shallow(<Nav />);

describe('Nav component', () => {
    it('is rendered', () => {
        expect(component).toBeTruthy(); //comentar render condicional
    });
    it('render subcomponents', () => {
        expect(component.find('Paragraph')).toHaveLength(1);
    });
    test('if title is specified, component use two more Paragraph', () => {
        component.setProps({title: title});
        expect(component.find('Paragraph')).toHaveLength(3);
    });
    test('if render the correct size title for desktop style', () => {
        setGlobalInnerWidth(768);
        component.setProps({title: title});
        expect(component.find('Paragraph').at(0).prop('size')).toEqual(48);
    });
    test('if render the correct size title for desktop style', () => {
        setGlobalInnerWidth(767);
        component.setProps({title: title});
        expect(component.find('Paragraph').at(1).prop('size')).toEqual(24);
    });
});