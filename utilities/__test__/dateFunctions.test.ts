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
            expect(dateFn.formatDateDMY(new Date(2022,9,1,2,5,3))).toEqual('01-09-2022');
            expect(dateFn.formatDateDMY(new Date(2022,10,22,19,59,48),'/')).toEqual('22/10/2022');
        });
    });
    describe('formatTime() function:', () => {
        test('with valid Date, return a formatted time, with default or custom separator', () => {
            expect(dateFn.formatTime(new Date(2022,9,1,2,5,3))).toEqual('02:05:03');
            expect(dateFn.formatTime(new Date(2022,10,22,19,59,48),'.')).toEqual('19.59.48');
        });
    });
    describe('formatTimeHHMM() function:', () => {
        test('with valid Date, return a formatted time without seconds, with default or custom separator', () => {
            expect(dateFn.formatTimeHHMM(new Date(2022,9,1,2,5,3))).toEqual('02:05');
            expect(dateFn.formatTimeHHMM(new Date(2022,10,22,19,59,48),'.')).toEqual('19.59');
        });
    });
    describe('formatDateTime() function:', () => {
        test('with valid Date, return a formatted date and time, with default or custom separator', () => {
            expect(dateFn.formatDateTime(new Date(2022,9,1,2,5,3))).toEqual('2022-09-01 02:05:03');
            expect(dateFn.formatDateTime(new Date(2022,10,22,19,59,48),'T','/','*')).toEqual('2022/10/22T19*59*48');
        });
    });
    describe('formatDateTimeDMY() function:', () => {
        test('with valid Date, return a formatted date and time, with default or custom separator', () => {
            expect(dateFn.formatDateTimeDMY(new Date(2022,9,1,2,5,3))).toEqual('01-09-2022 02:05:03');
            expect(dateFn.formatDateTimeDMY(new Date(2022,10,22,19,59,48),'T','/','*')).toEqual('22/10/2022T19*59*48');
        });
    });
    describe('formatDateName() function:', () => {
        test('with valid Date, return a formatted date and time, with names for days and months', () => {
            expect(dateFn.formatDateName(new Date(2022,9,1,2,5,3))).toEqual('Sábado 1 de Octubre de 2022');
        });
    });
    describe('isLeapYear() function:', () => {
        test('with valid Date, return true or false if year is leapyear', () => {
            expect(dateFn.isLeapYear(new Date(2022,9,1,2,5,3))).toEqual(false);
            expect(dateFn.isLeapYear(new Date(2024,9,1,2,5,3))).toEqual(true);
            expect(dateFn.isLeapYear(new Date(2026,9,1,2,5,3))).toEqual(false);
        });
    });
    describe('monthName() function:', () => {
        test('with valid Date, return the month name', () => {
            expect(dateFn.monthName(new Date(2022,0,1,2,5,3))).toEqual('Enero');
            expect(dateFn.monthName(new Date(2022,11,1,2,5,3))).toEqual('Diciembre');
        });
    });
    describe('dayName() function:', () => {
        test('with valid Date, return the day name', () => {
            expect(dateFn.dayName(new Date(2022,1,1,2,5,3))).toEqual('Martes');
        });
    });
    describe('isHolyday() function:', () => {
        test('with valid Date and short country name, return true or false if day is holyday', () => {
            expect(dateFn.isHolyday(new Date(2022,0,1,2,5,3), 'ar')).toEqual(true);
            expect(dateFn.isHolyday(new Date(2022,0,2,2,5,3), 'ar')).toEqual(false);
        });
    });
    describe('isHolyDayAR() function:', () => {
        test('with valid Date, return true or false if day is holyday in Argentina', () => {
            expect(dateFn.isHolyDayAR(new Date(2022,4,25,2,5,3))).toEqual(true);
            expect(dateFn.isHolyDayAR(new Date(2022,4,26,2,5,3))).toEqual(false);
        });
    });
});