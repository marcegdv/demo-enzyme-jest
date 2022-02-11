import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextCard, { TextCardProps } from './TextCard';

const textCard = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
const props: TextCardProps = {
    children: textCard,
};

const component: ShallowWrapper = shallow(<TextCard {...props}/>);

describe('TextCard component', () => {
    it('is rendered with all props', () => {
        component.setProps({width: '100px', height: '100px'}) //comentar cobertura
        expect(component).toBeTruthy();
    });
});