import React from 'react';
import textCardStyles, { StyleValues } from './TextCard.styles';

export type TextCardProps = {
    children: React.ReactNode;
    width?: string;
    height?: string;
};

const Textard = (props: TextCardProps) => {
    const values: StyleValues = {
        width: props.width ?? '',
        height: props.height ?? '',
    };
    return (
        <div className={textCardStyles(values)}>
            {props.children}
        </div>
    );
};

export default Textard;