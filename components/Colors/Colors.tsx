export type ColorsType = {
    danger: string;
    dark: string;
    inactive: string;
    light: string;
    normal: string;
    primary: string;
    safe: string;
    secondary: string;
    warning: string;
}

export const colors: ColorsType = {
    danger: '#dd2233',
    dark: '#222222',
    inactive: '#cccccc',
    light: '#eeeeee',
    normal: '#000000',
    primary: '#3366ee',
    safe: '#22aa55',
    secondary: '#789abc',
    warning: '#eeaa00',
};

export const colorsMap = new Map();
colorsMap.set('danger', colors.danger);
colorsMap.set('dark', colors.dark);
colorsMap.set('inactive', colors.inactive);
colorsMap.set('light', colors.light);
colorsMap.set('normal', colors.normal);
colorsMap.set('primary', colors.primary);
colorsMap.set('safe', colors.safe);
colorsMap.set('secondary', colors.secondary);
colorsMap.set('warning', colors.warning);

const getColor = (color: string = ''): string => {
    let finalColor: string;
    if (!color) { finalColor = colorsMap.get('normal'); }
    else {
        finalColor = colorsMap.get(color);
        if (!finalColor) { finalColor = color }
    }
    return finalColor;
}

export default getColor;