import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Nav, { NavProps } from './Nav';

//agregar modo desktop/mobile
const title = 'Hello World!';
const component: ShallowWrapper = shallow(<Nav />);

describe('Nav component', () => {
    it('is rendered', () => {
        expect(component).toBeTruthy(); //comentar render condicional
    });
});