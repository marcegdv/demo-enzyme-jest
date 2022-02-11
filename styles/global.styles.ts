import { cssRaw } from 'typestyle';

export const styles = `
body {
    margin: 0px;
    padding: 0px;
}

#__next {
    height: 100vh;
}

footer {
    min-height: 128px;
}

#__next {
    display: flex;
    flex-direction: column;
}

footer {
    margin-top: auto;
}`

const globalStyles = () => {
    cssRaw(styles);
};

export default globalStyles;