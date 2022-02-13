import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import About from '.';

const mockRouter: jest.Mock<Function, Function[]> = jest.fn();
jest.mock('next/router', () => ({
    ...(jest.requireActual('next/router') as any),
    useRouter: () => ({
        push: mockRouter,
        replace: mockRouter,
    }),
}));
const component: ShallowWrapper = shallow(<About />);

describe('About component', () => {
    it('is rendered', () => {
        expect(component).toBeTruthy;
    });
    it('render specific subcomponents', () => {
        expect(component.find('Nav')).toHaveLength(1);
        expect(component.find('Main')).toHaveLength(1);
        expect(component.find('TextButton')).toHaveLength(1);
        expect(component.find('Paragraph')).toHaveLength(1);
        expect(component.find('DateCard')).toHaveLength(0);
        expect(component.find('LinkButton')).toHaveLength(1);
        expect(component.find('Footer')).toHaveLength(1);
    });
    test('if click to view or hide DateCard, the text change', () => {
        const textView = 'Ver fecha actual';
        const textHide = 'Ocultar fecha';
        expect(component.find('Paragraph').prop('children')).toEqual(textView);
        component.find('TextButton').simulate('click');
        expect(component.find('Paragraph').prop('children')).toEqual(textHide);
        component.find('TextButton').simulate('click');
        expect(component.find('Paragraph').prop('children')).toEqual(textView);
    });
    test('if click to view or hide DateCard, the card is shown or not', () => {
        component.find('TextButton').simulate('click');
        expect(component.find('DateCard')).toHaveLength(1);
        component.find('TextButton').simulate('click');
        expect(component.find('DateCard')).toHaveLength(0);
    });
    test('if click on button "Volver" go to home page', () => {
        component.find('LinkButton').dive().simulate('click');  //comentar
        expect(mockRouter).toHaveBeenCalledWith('/');
    });
});