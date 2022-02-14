import React from 'react';
import Paragraph, { ParagraphProps } from '../../Text/Paragraph/Paragraph';
import textCardStyles, { StyleValues } from './TextCard.styles';

export type TextCardProps = {
    text: string;
    size?: number;
    weight?: string;
    color?: string;
    align?: string;
    width?: string;
    height?: string;
};

const Textard = (props: TextCardProps) => {
    const values: StyleValues = {
        width: props.width ?? '',
        height: props.height ?? '',
    };
    const setting: ParagraphProps = {
        size: props.size ?? 16,
        weight: props.weight ?? 'normal',
        color: props.color ?? 'normal',
        align: props.align ?? 'left',
    };
    return (
        <div className={textCardStyles(values)}>
            <Paragraph {...setting}>
                {props.text}
            </Paragraph>
        </div>
    );
};

export default Textard;