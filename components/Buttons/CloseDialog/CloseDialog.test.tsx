import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CloseDialog, { CloseDialogProps } from './CloseDialog';

const mockOnClick = jest.fn();
const props: CloseDialogProps = {
    onClick: mockOnClick,
};

const component: ShallowWrapper = shallow(<CloseDialog {...props}/>);

describe('CloseDialog component', () => {
    beforeEach(() => {
        mockOnClick.mockReset();
    });
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    test('on click, call function', () => {
        component.simulate('click');
        expect(mockOnClick).toBeCalled();
    });
});