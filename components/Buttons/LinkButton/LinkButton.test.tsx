import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LinkButton, { LinkButtonProps } from './LinkButton';

/* Creación de dos mocks para verificar el uso de las funciones push()
   y replace() del router de next */
const mockRouterPush: jest.Mock = jest.fn();
const mockRouterReplace: jest.Mock = jest.fn();

/* Creación del mock de router de next */
jest.mock('next/router', () => ({
    ...(jest.requireActual('next/router') as any),
    useRouter: () => ({
        push: mockRouterPush,
        replace: mockRouterReplace,
    }),
}));

const props: LinkButtonProps = {
    text: 'Label',
    url: 'www.google.com.ar',
};

const component: ShallowWrapper = shallow(<LinkButton {...props} />);

describe('LinkButton component', () => {
    describe('using router.push()', () => {
        beforeEach(() => {
            mockRouterPush.mockReset();
        });
        test('on click, call router.push() with specified url', () => {
            expect(mockRouterPush).toBeCalledTimes(0);
            component.simulate('click');
            expect(mockRouterPush).toBeCalledTimes(1);
            expect(mockRouterPush).toBeCalledWith(props.url);
        });
        test('on Enter key press, call router.push() with specified url', () => {
            expect(mockRouterPush).toBeCalledTimes(0);
            component.simulate('keypress', { key: 'Enter' });
            expect(mockRouterPush).toBeCalled();
            expect(mockRouterPush).toBeCalledTimes(1);
        });
        test('on SpaceBar key press, call router.push() with specified url', () => {
            expect(mockRouterPush).toBeCalledTimes(0);
            component.simulate('keypress', { key: ' ' });
            expect(mockRouterPush).toBeCalled();
            expect(mockRouterPush).toBeCalledTimes(1);
        });
    });
    describe('using router.replace()', () => {
        component.setProps({ replace: true });
        beforeEach(() => {
            mockRouterReplace.mockReset();
        });
        test('on click, call router.replace() with specified url', () => {
            expect(mockRouterReplace).toBeCalledTimes(0);
            component.simulate('click');
            expect(mockRouterReplace).toBeCalledTimes(1);
            expect(mockRouterReplace).toBeCalledWith(props.url);
        });
        test('on Enter key press, call router.replace() with specified url', () => {
            expect(mockRouterReplace).toBeCalledTimes(0);
            component.simulate('keypress', { key: 'Enter' });
            expect(mockRouterReplace).toBeCalled();
            expect(mockRouterReplace).toBeCalledTimes(1);
        });
        test('on SpaceBar key press, call router.replace() with specified url', () => {
            expect(mockRouterReplace).toBeCalledTimes(0);
            component.simulate('keypress', { key: ' ' });
            expect(mockRouterReplace).toBeCalled();
            expect(mockRouterReplace).toBeCalledTimes(1);
        });
    });
});