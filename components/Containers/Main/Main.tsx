import * as React from 'react';
import styles from './Main.styles';

export type MainProps = {
    children?: React.ReactNode;
}

const Main = (props: MainProps) => {
    return (
        <main style={{ margin: '8px' }}>
            <div className={styles.main}>
                {props.children}
            </div>
        </main>
    );
};

export default Main;