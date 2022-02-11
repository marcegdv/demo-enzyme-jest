import { style } from 'typestyle';

const styles = {
    backGround: style({
        zIndex: 1,
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        top: '0',
        left: '0',
    }),
    container: style({
        zIndex: 2,
        borderRadius: '8px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '16px',
        width: '640px',
        height: '480px',
        minHeight: '240px',
        minWidth: '320px',
        boxShadow: '10px 10px 10px 0px rgba(0, 0, 0, 0.3)',
        $nest: {
            '@media screen and (max-width: 767px)': {
                maxWidth: '70%',
                maxHeight: '65%',
            },
        },
    }),
    topBar: style({
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#eee',
        position: 'relative',
        width: 'calc(100% - 50px)',
        minWidth: 'calc(fit-content - 50px)',
        minHeight: '34px',
        height: 'fit-content',
        paddingLeft: '4px',
        cursor: 'normal',
    }),
    content: style({
        borderRadius: '4px',
        padding: '8px',
        position: 'absolute',
        top: '66px',
        left: '16px',
        bottom: '80px',
        right: '16px',
        overflowY: 'auto',
        backgroundColor: '#eee',
    }),
    buttons: style({
        position: 'absolute',
        bottom: '16px',
        right: '16px',
    }),
};

export default styles;