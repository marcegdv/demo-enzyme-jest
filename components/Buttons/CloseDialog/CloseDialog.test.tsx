import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CloseDialog from './CloseDialog';

const mockOnClick = jest.fn();

const component: ShallowWrapper = shallow(<CloseDialog onClick={mockOnClick}/>);

describe('CloseDialog component', () => {
    beforeEach(() => {
        mockOnClick.mockReset();
    });
    test('on click, call function', () => {
        component.simulate('click');
        expect(mockOnClick).toBeCalled();
        expect(mockOnClick).toBeCalledTimes(1);
    });
});