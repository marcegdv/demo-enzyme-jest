import React from 'react';
import styles from './UrlButton.styles';
import { NextRouter, useRouter } from "next/router";

export type UrlButtonProps = {
    text: string,
    url: string,
    width?: string,
    height?: string,
    replace?: boolean,
}

const UrlButton = (props: UrlButtonProps) => {
    const router: NextRouter = useRouter();

    const handleMouseClick = () => {
        if (props.replace) {
            router.replace(props.url);
        }
        router.push(props.url);
    }

    return (
        <div className={styles.default} onClick={handleMouseClick}
            style={{width: props.width, height: props.height}}
        >
            {props.text}
        </div>
    );
};

export default UrlButton;
