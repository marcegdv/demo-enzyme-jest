import { style } from 'typestyle';

export type FooterHeight = {
    mobile: string,
    desktop: string,
    mobileValue: number,
    desktopValue: number,
};

export const footerHeight: FooterHeight = {
    mobile: '64px',
    desktop: '128px',
    mobileValue: 64,
    desktopValue: 128,
};

const styles = {
    footer: style({
        padding: '8px',
        background: 'black',
        color: '#dddddd',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                minHeight: footerHeight.mobile,
            },
            '@media only screen and (min-width: 768px)': {
                minHeight: footerHeight.desktop,
            },
        },
    }),
    container: style({
        border: '1px solid #fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
};

export default styles;