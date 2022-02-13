import React from 'react';
import getColor from '../../Colors';
import paragraphStyles, { StyleValues } from './Paragraph.styles';

export type ParagraphProps = {
    size?: number;
    weight?: string;
    color?: string;
    align?: string;
    children?: React.ReactNode;
};

const Paragraph = (props: ParagraphProps) => {
    const values: StyleValues = {
        size: `${props.size ?? 8}px`,
        weight: props.weight ?? 'normal',
        color: getColor(props.color ?? ''),
        align: props.align ?? 'left',
    };

    return (
        <div className={paragraphStyles(values)}>
            {props.children}
        </div>
    );
};

export default Paragraph;