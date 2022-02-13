import { style } from 'typestyle';

export type StyleValues = {
    width?: string;
    height?: string;
};

const textCardStyles = (val: StyleValues): string => {
    return style ({
        border: '1px solid #ccc',
        padding: '8px',
        borderRadius: '8px',
        width: val.width || 'fit-content',
        height: val.height || 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.3)',
        cursor: 'default',
    });
};

export default textCardStyles;