import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import TextCard, { TextCardProps } from './TextCard';

const props: TextCardProps = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    size: 16,
    weight: 'normal',
    color: 'primary',
    align: 'center',
    width: '100px',
    height: '50px',
};
const component: ShallowWrapper = shallow(<TextCard {...props} />);

describe('TextCard component', () => {
    it('render subcomponents', () => {
        expect(component.find('Paragraph')).toHaveLength(1);
    });
    it('was rendered with specified properties for Paragraph', () => {
        const paragraph: ShallowWrapper = component.find('Paragraph');
        expect(paragraph.prop('children')).toEqual(props.text);
        expect(paragraph.prop('size')).toEqual(props.size);
        expect(paragraph.prop('weight')).toEqual(props.weight);
        expect(paragraph.prop('color')).toEqual(props.color);
        expect(paragraph.prop('align')).toEqual(props.align);
    });
    it('renders with default properties for Paragraph', () => {
        const text = 'Hello Wordl!';
        const comp: ShallowWrapper = shallow(<TextCard text={text}/>).find('Paragraph');
        expect(comp.prop('children')).toEqual(text);
        expect(comp.prop('size')).toEqual(16);
        expect(comp.prop('weight')).toEqual('normal');
        expect(comp.prop('color')).toEqual('normal');
        expect(comp.prop('align')).toEqual('left');
    });
});