import React from 'react';
import getColor from '../../Colors';

export type ParagraphProps = {
    size?: number;
    weight?: string;
    color?: string;
    align?: string;
    children?: React.ReactNode;
};

const Paragraph = (props: ParagraphProps) => {
    const paragraphStyles: any = {
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: `${props.size ?? 8}px`,
        fontWeight: props.weight ?? 'normal',
        color: getColor(props.color || ''),
        textAlign: props.align ?? 'left',
    };

    return (
        <div style={paragraphStyles}>
            {props.children}
        </div>
    );
};

export default Paragraph;