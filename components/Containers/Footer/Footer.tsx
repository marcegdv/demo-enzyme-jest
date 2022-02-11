import React from 'react';
import styles from './Footer.styles';
import Paragraph from '../../Text/Paragraph';

export type Footer1Props = {
    children?: React.ReactNode;
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Paragraph size={16} color={'#0f0'} align={'center'}>Jest + Enzyme</Paragraph>
                <br />
                <Paragraph size={16} weight={'bold'} color={'#ff0'} align={'center'}>{`< `}React - Next{` >`}</Paragraph>
            </div>
        </footer>
    );
};

export default Footer;