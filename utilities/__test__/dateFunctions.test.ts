import * as dateFn from '../dateFunctions';

describe('dateFunctions module:', () => {
    describe('monthPadding() function:', () => {
        test('with valid Date, return a string with two digits for month number', () => {
            expect(dateFn.monthPadding(new Date(2022,9,1,12,0,0))).toEqual('09');
            expect(dateFn.monthPadding(new Date(2022,10,1,12,0,0))).toEqual('10');
        });
    });
    describe('datePadding() function:', () => {
        test('with valid Date, return a string with two digits for day number', () => {
            expect(dateFn.datePadding(new Date(2022,9,1,12,0,0))).toEqual('01');
            expect(dateFn.datePadding(new Date(2022,9,25,12,0,0))).toEqual('25');
        });
    });
    describe('hourPadding() function:', () => {
        test('with valid Date, return a string with two digits for hour number', () => {
            expect(dateFn.hourPadding(new Date(2022,9,1,2,0,0))).toEqual('02');
            expect(dateFn.hourPadding(new Date(2022,9,1,18,0,0))).toEqual('18');
        });
    });
    describe('minutePadding() function:', () => {
        test('with valid Date, return a string with two digits for minute number', () => {
            expect(dateFn.minutePadding(new Date(2022,9,1,2,5,0))).toEqual('05');
            expect(dateFn.minutePadding(new Date(2022,9,1,2,59,0))).toEqual('59');
        });
    });
    describe('secondPadding() function:', () => {
        test('with valid Date, return a string with two digits for second number', () => {
            expect(dateFn.secondPadding(new Date(2022,9,1,2,5,3))).toEqual('03');
            expect(dateFn.secondPadding(new Date(2022,9,1,2,59,48))).toEqual('48');
        });
    });
    describe('formatDateDMY() function:', () => {
        test('with valid Date, return a formatted date, with default or custom separator', () => {
            expect(dateFn.formatDateDMY(new Date(2022,9,1,2,5,3))).toEqual('01/09/2022');
            expect(dateFn.formatDateDMY(new Date(2022,10,22,12,59,48),'-')).toEqual('22-10-2022');
        });
    });
    describe('formatTime() function:', () => {
        test('with valid Date, return a formatted date, with default or custom separator', () => {
            expect(dateFn.formatTime(new Date(2022,9,1,2,5,3))).toEqual('02:05:03');
            expect(dateFn.formatTime(new Date(2022,10,22,12,59,48),'.')).toEqual('12.59.48');
        });
    });
});
/*
formatTimeHHMM
formatDateTime
formatDateTimeDMY
formatDateName
isLeapYear
monthName
dayName
isHolyday
isHolyDayAR
*/