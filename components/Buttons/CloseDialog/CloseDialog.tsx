import * as React from 'react';
import styles from './CloseDialog.styles';
import { isEnter, isSpaceBar } from '../../../utilities/keyboardFunctions';

export type CloseDialogProps = {
    onClick: Function;
    onKeyPress?: Function;
    tabIndex?: number;
}

const CloseDialog = (props: CloseDialogProps) => {

    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (props.onKeyPress) {
            if ((isEnter(e) || isSpaceBar(e))) {
                props.onKeyPress();
            };
        };
    };

    return (
        <div className={styles.container}
            tabIndex={props.tabIndex}
            onClick={() => props.onClick()}
            onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => handleOnKeyPress(e)}
        >
            x
        </div>
    );
};

export default CloseDialog;