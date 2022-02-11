import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import UrlButton, { UrlButtonProps } from './UrlButton';

const mockRouter: jest.Mock<Function, Function[]> = jest.fn();
jest.mock('next/router', () => ({
    ...(jest.requireActual('next/router') as any),
    useRouter: () => ({
        push: mockRouter,
        replace: mockRouter,
    }),
}));

const docUrl = 'https://enzymejs.github.io/enzyme/';
const props: UrlButtonProps = {
    text: 'Go to url!',
    url: docUrl,
};

const component: ShallowWrapper = shallow(<UrlButton {...props}/>);

describe('UrlButton component', () => {
    beforeEach(() => {
        mockRouter.mockReset();
    });
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    test('on click, call router.push() with the specified url', () => {
        component.simulate('click');
        expect(mockRouter).toBeCalledWith(docUrl);
    });
    test('on click, call router.replace() with the specified url', () => {
        component.setProps({replace: true}); //comentar
        component.simulate('click');
        expect(mockRouter).toBeCalledWith(docUrl);
    });
});