import { style } from 'typestyle';

const styles = {
    container: style ({
        //padding: '8px',
        //backgroundColor: '#0077ff',
        color: '#0000ee',
        cursor: 'pointer',
        //transition: 'background-color 0.2s ease-out, color 0.2s ease-out, border-color 0.2s ease-out',
        transition: 'color 0.2s ease-out',
        $nest: {
            '&:hover': {
                //backgroundColor: '#dddddd',
                //borderColor: '#66ffff',
                color: '#0077ff',
            },
        },
    }),
    main: style ({

    }),
};

export default styles;