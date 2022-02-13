import React, { useEffect, useState } from 'react';
import styles from './Dialog.styles';

import DivButton from '../Buttons/DivButton';
import CloseDialog from '../Buttons/CloseDialog';
import Paragraph from '../Text/Paragraph';

export type DialogProps = {
    topBar?: string,
    onClick: Function,
    onClickClose: Function,
    children?: React.ReactNode,
};

const Dialog = (props: DialogProps) => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollX, setScrollX] = useState<number>(0);

    const handleClickClose = (): void => {
        document.body.style.overflow = 'visible';
        window.scrollTo(scrollX, scrollY);
        props.onClickClose();
    };

    const handleClick = (): void => {
        document.body.style.overflow = 'visible';
        window.scrollTo(scrollX, scrollY);
        props.onClick();
    };

    useEffect(() => {
        setScrollY(window.scrollY);
        setScrollX(window.scrollX);
        document.body.style.overflow = 'hidden';
    }, []);

    return (
        <div className={styles.backGround}>
            <div className={styles.container}>
                {props.topBar && <div className={styles.topBar}>
                    <Paragraph size={16} weight='bold' color={'dark'} align={'left'}>
                        {props.topBar}
                    </Paragraph>
                </div>}
                <div className={styles.closeDialog}>
                    <CloseDialog onClick={handleClickClose} />
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
                <div className={styles.buttons}>
                    <DivButton text='Cerrar' onClick={handleClick}
                        width='auto' color='light' backgroundColor='safe' isSecondary={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dialog;