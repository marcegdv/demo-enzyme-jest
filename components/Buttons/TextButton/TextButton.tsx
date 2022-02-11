import * as React from 'react';
import styles from './TextButton.styles';

export type TextButtonProps = {
    children?: React.ReactNode;
    onClick: Function;
}

const TextButton = (props: TextButtonProps) => {
    return (
        <div className={styles.container} onClick={() => props.onClick()}>
            {props.children}
        </div>
    );
};

export default TextButton;