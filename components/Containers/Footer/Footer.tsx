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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Paragraph size={16} color={'#0ff'} align={'center'}>Jest</Paragraph>
                    <Paragraph size={16} color={'#0f0'} align={'center'}>&nbsp;+&nbsp;</Paragraph>
                    <Paragraph size={16} color={'#00bfff'} align={'center'}>Enzyme</Paragraph>
                </div>
            </div>
        </footer>
    );
};

export default Footer;