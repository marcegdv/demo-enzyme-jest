import React from 'react';
import styles from './LinkButton.styles';
import { useRouter } from "next/router";
import { buttonPress } from '../../../utilities/keyboardFunctions';

export type LinkButtonProps = {
    text: string,
    url: string,
    replace?: boolean,
    width?: string,
    height?: string,
    tabIndex?: number,
};

const LinkButton = (props: LinkButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (props.replace) { router.replace(props.url); }
        router.push(props.url);
    };
    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (buttonPress(e)) {
            handleClick();
        };
    };

    return (
        <div className={styles.default}
            onClick={handleClick}
            onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleOnKeyPress(e)}
            style={{ width: props.width, height: props.height }}
            tabIndex={props.tabIndex}
        >
            {props.text}
        </div>
    );
};

export default LinkButton;
