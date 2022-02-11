import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DateCard, { DateCardProps } from './DateCard';

const dateNow: Date = new Date(2022, 1, 14, 14, 0 ,0);
const props: DateCardProps = {
    dateTime: dateNow,
};

const component: ShallowWrapper = shallow(<DateCard {...props}/>);

describe('DateCard component', () => {
    it('is rendered', () => {
        expect(component).toBeTruthy();
    });
    it('render five Paragraph components', () =>{
        expect(component.find('Paragraph')).toHaveLength(5); //comentar cobertura
    });
    test('1st Paragraph is the month name', () => {
        expect(component.find('Paragraph').at(0).prop('children')).toEqual('Febrero');
    });
    test('2nd Paragraph is the year', () => {
        expect(component.find('Paragraph').at(1).prop('children')).toEqual('2022');
    });
    test('3rd Paragraph is the day name', () => {
        expect(component.find('Paragraph').at(2).prop('children')).toEqual('Lunes');
    });
    test('4th Paragraph is the day of month', () => {
        expect(component.find('Paragraph').at(3).prop('children')).toEqual('14');
    });
    test('5th Paragraph is the time', () => {
        expect(component.find('Paragraph').at(4).prop('children')).toEqual('14:00 hs.');
    });
});