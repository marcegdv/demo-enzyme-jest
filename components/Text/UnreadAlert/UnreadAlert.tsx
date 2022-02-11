import React from 'react';
import styles from './UnreadAlert.styles';
import getColor from '../../Colors';

export type UnreadCounterProps = {
    color?: string;
    bgColor?: string;
    children?: React.ReactNode;
}

const UnreadCounter = (props: UnreadCounterProps) => {
    const colors = {
        color: getColor(props.color || 'white'),
        backgroundColor: getColor(props.bgColor || 'red'),
    };
    let containerStyle: string = styles.container;
    if ((props.children) && (props.children.toString().length > 2)) {
        containerStyle = styles.container2;
    }

    return (
        <div className={containerStyle} style={colors}>
            {props.children}
        </div>
    );
};

export default UnreadCounter;