import { style } from 'typestyle';
import { palette } from '../../../utilities/colorsFunctions';

export type StyleValues = {
    color?: string,
    backgroundColor?: string,
    isSecondary?: boolean,
    width?: string,
    height?: string,
};

const buttonStyles = (val: StyleValues): string => {
    const fcolor = val.color ?? 'light';
    const bcolor = val.backgroundColor ?? 'primary';
    const isSec = val.isSecondary ?? false;
    const width = val.width ?? '100%';
    const height = val.height ?? '32px';

    const currentBackgroundColor = () => palette(isSec ? fcolor : bcolor);
    const currentColor = () => palette(isSec ? bcolor : fcolor);
    const hoverBackgroundColor = () => palette(isSec ? bcolor : (bcolor + 'Dark'));
    const hoverColor = () => palette(isSec ? fcolor : (fcolor + 'Dark'));

    return style({
        backgroundColor: currentBackgroundColor(),
        borderColor: palette(bcolor),
        borderRadius: '4px',
        border: '2px solid',
        padding: '8px 16px',
        color: currentColor(),
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        height: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.1s ease-out, color 0.1s ease-out, border-color 0.1s ease-out',
        $nest: {
            '&:hover': {
                backgroundColor: hoverBackgroundColor(),
                borderColor: hoverBackgroundColor(),
                color: hoverColor(),
            },
        },
    });
};

export default buttonStyles;