import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import Home from '.';

const mockRouter: jest.Mock = jest.fn();
jest.mock('next/router', () => ({
    ...(jest.requireActual('next/router') as any),
    useRouter: () => ({
        push: mockRouter,
        replace: mockRouter,
    }),
}));

describe('Home component:', () => {
    const component: ShallowWrapper = shallow(<Home />);
    it('is rendered', () => {
        expect(component).toBeTruthy;
    });
    it('render specific subcomponents', () => {
        expect(component.find('Nav')).toHaveLength(1);
        expect(component.find('Main')).toHaveLength(1);
        expect(component.find('MainCards')).toHaveLength(1);
        expect(component.find('DivButton')).toHaveLength(1);
        expect(component.find('Paragraph')).toHaveLength(2);
        expect(component.find('Dialog')).toHaveLength(0);
        expect(component.find('DialogContent')).toHaveLength(0);
        expect(component.find('Footer')).toHaveLength(1);
    });
    it('when click on DivButton, render Dialog', () => {
        component.find('DivButton').simulate('click');
        expect(component.find('Dialog')).toHaveLength(1);
        expect(component.find('DialogContent')).toHaveLength(1);
    });
});

describe('When dialog is open:', () => {
    const component: ReactWrapper = mount(<Home />);
    component.find('DivButton').simulate('click');
    const content: ReactWrapper = component.find('DialogContent');
    it('content is rendered', () => {
        expect(content.find('Paragraph')).toHaveLength(2);
        expect(content.find('LinkButton')).toHaveLength(1);
    });
    test('when click on UrlButton, go to /contact', () => {
        mockRouter.mockReset();
        content.find('LinkButton').simulate('click');
        expect(mockRouter).toHaveBeenCalledWith('/about');
    });
});