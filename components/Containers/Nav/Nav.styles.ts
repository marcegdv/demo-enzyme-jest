import { style } from 'typestyle';

export type NavHeight = {
    mobile: string;
    desktop: string;
    mobileValue: number,
    desktopValue: number,
}

export const navHeight: NavHeight = {
    mobile: '64px',
    desktop: '128px',
    mobileValue: 64,
    desktopValue: 128,
}

const styles = {
    container: style({
        backgroundColor: '#00aa99',
        color: '#fbfbfb',
        width: '100%',
        height: navHeight.desktop,
        $nest: {
            '@media only screen and (max-width: 767px)': {
                height: navHeight.mobile,
            },
        },
    }),
    main: style({
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    col1: style({
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '4px',
    }),
    col2_desktop: style({
        filter: 'drop-shadow(7px 7px 4px #555)',
        width: '60%',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                display: 'none',
            },
        },
    }),
    col2_mobile: style({
        width: '60%',
        display: 'flex',
        justifyContent: 'end',
        paddingRight: '16px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                display: 'none',
            },
        },
    }),
    logo: style({
        marginLeft: '8px',
        border: 'solid 3px black',
        backgroundColor: '#224499',
        borderRadius: '32px',
        width: '128px',
        height: '96px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                opacity: '0.25',
                border: 'solid 1px black',
                backgroundColor: '#224499',
                borderRadius: '48px',
                width: '48px',
                height: '48px',
            },
        },
    })
};

export default styles;