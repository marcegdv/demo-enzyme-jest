import { style } from 'typestyle';

const styles = {
    default: style ({
        padding: '12px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: 'bold',
        fontSize: '16px',
        textDecoration: 'underline',
        color: '#0af',
        backgroundColor: '#fff',
        borderRadius: '16px',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out',
        $nest: {
            '&:hover': {
                color: '#fff',
                backgroundColor: '#0af',
            },
        },
    }),
};

export default styles;