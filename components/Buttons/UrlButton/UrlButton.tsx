import React from 'react';
import styles from './UrlButton.styles';
import { NextRouter, useRouter } from "next/router";

export type UrlButtonProps = {
    text: string,
    onClick: Function,
    width?: string,
    height?: string,
};

const UrlButton = (props: UrlButtonProps) => {
    return (
        <div className={styles.default} onClick={() => props.onClick()}
            style={{width: props.width, height: props.height}}
        >
            {props.text}
        </div>
    );
};

export default UrlButton;
