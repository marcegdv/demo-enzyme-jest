import React from 'react';
import styles from './LinkButton.styles';
import { useRouter } from "next/router";

export type LinkButtonProps = {
    text: string,
    url: string,
    replace?: boolean,
    width?: string,
    height?: string,
};

const LinkButton = (props: LinkButtonProps) => {
    const router = useRouter();
    const handleClick = () => {
        if (props.replace) { router.replace(props.url); }
        router.push(props.url);
    };

    return (
        <div className={styles.default} onClick={handleClick}
            style={{width: props.width, height: props.height}}
        >
            {props.text}
        </div>
    );
};

export default LinkButton;
