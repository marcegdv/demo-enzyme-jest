import { useEffect, useState } from 'react';
import styles from './Dialog.styles';

import Button from '../Buttons/Button';
import CloseDialog from '../Buttons/CloseDialog';
import Paragraph from '../Text/Paragraph';

export type DialogProps = {
    topBar?: string,
    onClickClose: Function,
    children?: React.ReactNode,
    id?: string,
};

const Dialog = (props: DialogProps) => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollX, setScrollX] = useState<number>(0);

    const handleClickClose = (): void => {
        document.body.style.overflow = 'visible';
        window.scrollTo(scrollX, scrollY);
        props.onClickClose();
    };

    useEffect(() => {
        setScrollY(window.scrollY);
        setScrollX(window.scrollX);
        document.body.style.overflow = 'hidden';
    }, []);

    return (
        <div className={styles.backGround}>
            <div className={styles.container}>
                <div className={styles.topBar}>
                    <Paragraph size={16} weight='bold' color={'dark'} align={'left'}>
                        {props.topBar}
                    </Paragraph>
                </div>
                <CloseDialog onClick={handleClickClose} />
                <div className={styles.content}>
                    {props.children}
                </div>
                <div className={styles.buttons}>
                    <Button text='Cerrar' onClick={handleClickClose}
                        width='auto' color='light' backgroundColor='safe' isSecondary={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dialog;