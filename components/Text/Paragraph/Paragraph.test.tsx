import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Paragraph, { ParagraphProps } from './Paragraph';

describe('Paragraph component:', () => {
    const props: ParagraphProps = {
        children: 'Hello World!'
    };
    const component: ShallowWrapper = shallow(<Paragraph {...props}/>);
    it('is rendered', () => {
        expect(component).toBeTruthy;
    });
    it('render with specified properties', () => {
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