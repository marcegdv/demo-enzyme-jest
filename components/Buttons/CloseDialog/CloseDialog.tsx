import * as React from 'react';
import styles from './CloseDialog.styles';

export type CloseDialogProps = {
    onClick: Function;
    onKeyPress?: Function;
    tabIndex?: number;
}

const CloseDialog = (props: CloseDialogProps) => {

    const handleOnKeyPress = () => {
        if (props.onKeyPress) {
            props.onKeyPress();
        };
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => e.key === 'Enter' || e.key === ' ';

    return (
        <div className={styles.container}
            tabIndex={props.tabIndex}
            onClick={() => props.onClick()}
            onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (handleKeyPress(e)) handleOnKeyPress();
            }}
        >
            x
        </div>
    );
};

export default CloseDialog;