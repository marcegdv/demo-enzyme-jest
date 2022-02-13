import { style } from 'typestyle';
import { footerHeight } from '../../Containers/Footer/Footer.styles'

const styles = {
    container: style({
        backgroundColor: '#ffffff',
        width: '100%',
        paddingBottom: footerHeight.desktop,
    }),
    main: style({
        background: 'rgba(255,255,255,1)',
        width: '100%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 'calc(100% - ' + footerHeight.desktopValue * 2 + 'px)',
        minHeight: 'fit-content',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                height: 'calc(100% - ' + footerHeight.mobileValue * 2 + 'px)',
                paddingBottom: footerHeight.mobile,
            },
        },
    }),
};

export default styles;