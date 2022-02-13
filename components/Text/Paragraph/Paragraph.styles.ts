import { style } from 'typestyle';
import getColor from '../../Colors/Colors';

export type StyleValues = {
    size: string,
    weight: string,
    color: string,
    align: string,
};

const paragraphStyles = (val: StyleValues): string => {
    return style({
        color: getColor(val.color),
        fontSize: val.size,
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: val.weight as any,
        textAlign: val.align as any,
    });
};

export default paragraphStyles;