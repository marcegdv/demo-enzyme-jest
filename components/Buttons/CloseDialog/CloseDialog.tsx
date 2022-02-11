import * as React from 'react';
import styles from './CloseDialog.styles';

export type CloseDialogProps = {
    onClick: Function;
}

const CloseDialog = (props: CloseDialogProps) => {
    return (
        <div className={styles.container} onClick={() => {props.onClick()}}>
            x
        </div>
    );
};

export default CloseDialog;