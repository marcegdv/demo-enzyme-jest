export const monthPadding = (date: Date): string => {
    const month: string = date.getMonth().toString();
    return month.padStart(2, '0');
};
export const datePadding = (date: Date): string => {
    return date.getDate().toString().padStart(2, '0');
};

export const hourPadding = (date: Date): string => {
    return date.getHours().toString().padStart(2, '0');
};

export const minutePadding = (date: Date): string => {
    return date.getMinutes().toString().padStart(2, '0');
};

export const secondPadding = (date: Date): string => {
    return date.getSeconds().toString().padStart(2, '0');
};

export const formatDate = (date: Date, separator: string = '/'): string => {
    let response: string = date.getFullYear() + separator;
    response += monthPadding(date) + separator;
    response += datePadding(date);
    return response;
};

export const formatDateDMY = (date: Date, separator: string = '/'): string => {
    let response: string = datePadding(date) + separator;
    response += monthPadding(date) + separator;
    response += date.getFullYear();
    return response;
};

export const formatTime = (date: Date, separator: string = ':'): string => {
    let response: string = hourPadding(date) + separator;
    response += minutePadding(date) + separator;
    response += secondPadding(date);
    return response;
};

export const formatTimeHHMM = (date: Date, separator: string = ':'): string => {
    let response: string = hourPadding(date) + separator;
    response += minutePadding(date);
    return response;
};

export const formatDateTime = (date: Date): string => {
    return formatDate(date) + ' ' + formatTime(date);
};

export const formatDateTimeDMY = (date: Date): string => {
    return formatDateDMY(date) + ' ' + formatTime(date);
};

export const formatDateName = (date: Date): string => {
    const dia: string = dayName(date);
    const dianum: string = date.getDate().toString();
    const mes: string = monthName(date);
    return dia + ' ' + dianum + ' de ' + mes + ' de ' + date.getFullYear();
};

export const isLeapYear = (date: Date): boolean => {
    const year = date.getFullYear();
    return (year % 400 === 0) ? true : (year % 100 === 0) ? false : year % 4 === 0;
};

export const monthName = (date: Date): string => {
    switch (date.getMonth()) {
        case 0: return 'Enero';
        case 1: return 'Febrero';
        case 2: return 'Marzo';
        case 3: return 'Abril';
        case 4: return 'Mayo';
        case 5: return 'Junio';
        case 6: return 'Julio';
        case 7: return 'Agosto';
        case 8: return 'Septiembre';
        case 9: return 'Octubre';
        case 10: return 'Noviembre';
        case 11: return 'Diciembre';
        default: return '';
    };
};

export const dayName = (date: Date): string => {
    switch (date.getDay()) {
        case 0: return 'Domingo';
        case 1: return 'Lunes';
        case 2: return 'Martes';
        case 3: return 'Miércoles';
        case 4: return 'Jueves';
        case 5: return 'Viernes';
        case 6: return 'Sábado';
        default: return '';
    };
};

export const isHolyday = (date: Date, country: string): boolean => {
    switch (country) {
        case 'ar': return isHolyDayAR(date);
        default: return false;
    };
};

export const isHolyDayAR = (date: Date): boolean => {
    const mes: number = date.getMonth() + 1;
    const dia: number = date.getDate();
    let dias: string = '';
    switch (mes) {
        case 1: dias = '1'; break;
        case 3: dias = '24'; break;
        case 4: dias = '2'; break;
        case 5: dias = '1 25'; break;
        case 6: dias = '17 20'; break;
        case 7: dias = '9'; break;
        case 8: dias = '17'; break;
        case 10: dias = '12'; break;
        case 11: dias = '20'; break;
        case 12: dias = '8 25'; break;
    };
    return dias.includes(dia.toString());
};