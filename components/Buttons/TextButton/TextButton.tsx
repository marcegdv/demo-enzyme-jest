import * as React from 'react';
import { buttonPress } from '../../../utilities/keyboardFunctions';
import styles from './TextButton.styles';

export type TextButtonProps = {
    children?: React.ReactNode;
    onClick: Function;
    onKeyPress?: Function;
    tabIndex?: number
}

const TextButton = (props: TextButtonProps) => {
    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (props.onKeyPress && buttonPress(e)) {
            props.onKeyPress();
        };
    };
    return (
        <div className={styles.container}
            onClick={() => props.onClick()}
            onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleOnKeyPress(e)}
            tabIndex={props.tabIndex}
        >
            {props.children}
        </div>
    );
};

export default TextButton;