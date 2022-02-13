import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LinkButton, { LinkButtonProps } from './LinkButton';

const mockRouterPush: jest.Mock = jest.fn();
const mockRouterReplace: jest.Mock = jest.fn();
jest.mock('next/router', () => ({
    ...(jest.requireActual('next/router') as any),
    useRouter: () => ({
        push: mockRouterPush,
        replace: mockRouterReplace,
    }),
}));

const props: LinkButtonProps ={
    text: 'Label',
    url: 'www.google.com.ar',
};
const component: ShallowWrapper = shallow(<LinkButton {...props}/>);

describe('LinkButton component', () => {
    beforeEach(() => {
        mockRouterPush.mockReset();
        mockRouterReplace.mockReset();
    });
    test('on click, call router.push() with specified url', () => {
        expect(mockRouterPush).toBeCalledTimes(0);
        component.simulate('click');
        expect(mockRouterPush).toBeCalledTimes(1);
        expect(mockRouterPush).toBeCalledWith(props.url);
    });
    test('on click, call router.replace with specified url', () => {
        component.setProps({ replace: true});
        expect(mockRouterReplace).toBeCalledTimes(0);
        component.simulate('click');
        expect(mockRouterReplace).toBeCalledTimes(1);
        expect(mockRouterReplace).toBeCalledWith(props.url);
    });
});