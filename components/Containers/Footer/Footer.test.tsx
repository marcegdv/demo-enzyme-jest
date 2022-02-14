import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Footer from './Footer';

const component: ShallowWrapper = shallow(<Footer />);

describe('Footer component', () => {
    it('render html tag >footer>', () => {
        expect(component.find('footer')).toHaveLength(1);
        expect(component.find('div')).toHaveLength(2);
        expect(component.find('Paragraph')).toHaveLength(3);
    });
});
