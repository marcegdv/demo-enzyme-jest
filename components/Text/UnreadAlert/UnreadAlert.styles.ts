import { style } from 'typestyle';
import getColor from '../../Colors';

const styles = {
    container: style ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '24px',
        padding: '0px 1px',
        minWidth: '17px',
        minHeight: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: 11,
        textJustify: 'auto',
        fontWeight: 'bolder',
        color: getColor('light'),
    }),
    container2: style ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '24px',
        padding: '0px 4px',
        minWidth: '17px',
        minHeight: '18px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: 12,
        fontWeight: 'bolder',
        color: getColor('light'),
    })
};

export default styles;