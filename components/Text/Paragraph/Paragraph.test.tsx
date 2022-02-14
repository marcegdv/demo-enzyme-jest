import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Paragraph, { ParagraphProps } from './Paragraph';

const props: ParagraphProps = {
    children: 'Hello World!'
};
const component: ShallowWrapper = shallow(<Paragraph {...props}/>);

describe('Paragraph component:', () => {
    it('render with the specified properties set', () => {
        expect(component.prop('children')).toEqual(props.children);
        const val: ParagraphProps = {
            size: 10,
            weight: 'normal',
            color: 'red',
            align: 'center',
            children: <p>New children!</p>,
        };
        component.setProps(val);
        expect(component.prop('children')).toEqual(val.children);
    });
});