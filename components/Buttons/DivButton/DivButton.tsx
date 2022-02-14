import React from 'react';
import { buttonPress } from '../../../utilities/keyboardFunctions';
import buttonStyles, { StyleValues } from './DivButton.styles';

export type DivButtonProps = {
    text: string,
    onClick: Function,
    color?: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    isSecondary?: boolean,
    onKeyPress?: Function,
    tabIndex?: number,
};

const DivButton = (props: DivButtonProps) => {
    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (props.onKeyPress && buttonPress(e)) {
            props.onKeyPress();
        };
    };
    const values: StyleValues = {
        color: props.color,
        backgroundColor: props.backgroundColor,
        isSecondary: props.isSecondary,
        width: props.width,
        height: props.height,
    };
    return (
        <div className={buttonStyles(values)}
            onClick={() => props.onClick()}
            onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleOnKeyPress(e)}
            tabIndex={props.tabIndex}
        >
            {props.text}
        </div>
    );
};

export default DivButton;
