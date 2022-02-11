import { style } from 'typestyle';

const styles = {
    container: style ({
        borderRadius: '8px',
        width: '200px',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.1)',
    }),
    title: style({
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        height: 'fit-content',
        borderTopLeftRadius: 'inherit',
        borderTopRightRadius: 'inherit',
        background: 'rgba(128,0,0,1)',
    }),
    bodyCard: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomLeftRadius: 'inherit',
        borderBottomRightRadius: 'inherit',
        background: 'rgba(255,255,200,1)',
    }),
    widthFit: style({
        width: 'fit-content',
    }),
    cursorPointer: style({
        cursor: 'pointer',
    }),
};

export default styles;