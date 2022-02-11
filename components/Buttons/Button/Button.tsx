import React from 'react';
import buttonStyles, { StyleValues } from './Button.styles';

export type DivButtonProps = {
    text: string,
    onClick: Function,
    color?: string,
    backgroundColor?: string,
    width?: string,
    height?: string,
    isSecondary?: boolean,
};

const DivButton = (props: DivButtonProps) => {
    const values: StyleValues = {
        color: props.color,
        backgroundColor: props.backgroundColor,
        isSecondary: props.isSecondary,
        width: props.width,
        height: props.height,
    };
    return (
        <div className={buttonStyles(values)} onClick={() => props.onClick()}>
            {props.text}
        </div>
    );
};

export default DivButton;
