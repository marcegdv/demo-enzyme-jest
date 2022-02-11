import { style } from 'typestyle';

const styles = {
    container: style ({
        position: 'absolute',
        top: '16px',
        right: '16px',
        borderRadius: '3px',
        border: '1px solid #aaaaaa',
        padding: '4px',
        width: '24px',
        height: '24px',
        color: '#773344',
        fontFamily: 'Helvetica',
        fontSize: '16px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out',
        $nest: {
            '&:hover': {
                padding: '5px',
                border: 'none',
                backgroundColor: '#ff4444',
                color: '#ffffff',
                fontSize: '19px',
                fontWeight: 'bold',
            },
        },
    }),
};

export default styles;