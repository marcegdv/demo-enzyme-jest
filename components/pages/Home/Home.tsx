import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { stringLorem } from '../../../utilities/dummyFunctions';
import styles from './home.styles';

import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import Dialog from '../../Dialog';
import DivButton from '../../Buttons/DivButton';
import Paragraph from '../../Text/Paragraph';
import TextCard from '../../Cards/TextCard';
import UrlButton from '../../Buttons/UrlButton';

const HomePage = () => {
    const router = useRouter();
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const handleClickContact = () => {
        router.push('/contact');
    };

    const handleSwitchShowDialog = () => {
        setShowDialog(!showDialog)
    };

    const MainCards = (): JSX.Element => {
        return (
            <>
                <TextCard width='80%'>
                    <Paragraph size={16} weight='bold' color={'warning'} align={'left'}>
                        {stringLorem()}
                    </Paragraph>
                </TextCard>
                <TextCard width='80%'>
                    <Paragraph size={16} weight='bold' color={'danger'} align={'right'}>
                        {stringLorem()}
                    </Paragraph>
                </TextCard>
                <TextCard width='80%'>
                    <Paragraph size={16} weight='bold' color={'normal'} align={'center'}>
                        {stringLorem()}
                    </Paragraph>
                </TextCard>
            </>
        );
    };

    const dialogTitle = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit';
    const DialogContent = (): JSX.Element => {
        return (
            <>
                <Paragraph size={14} weight='bold' color={'secondary'}>
                    {stringLorem(4)}
                </Paragraph>
                <Paragraph size={14} weight='bold' color={'safe'} align='center'>
                    {stringLorem()}
                </Paragraph>
                <UrlButton text='Contact' onClick={handleClickContact} width='100px' height='fit-content' />
            </>
        );
    };

    return (
        <>
            <Nav title='Inicio' />
            <Main>
                <div className={styles.main_content}>
                    <MainCards />
                    <DivButton text='Abrir diálogo' height='48px' onClick={handleSwitchShowDialog}
                        width='200px' color='light' backgroundColor='safe' />
                    <Paragraph size={12} weight='bold' color={'primary'} align={'left'}>
                        {stringLorem(2)}
                    </Paragraph>
                    <Paragraph size={12} weight='bold' color={'secondary'} align={'center'}>
                        {stringLorem(1)}
                    </Paragraph>
                </div>
            </Main>
            <Footer />
            {showDialog &&
                <Dialog onClick={handleSwitchShowDialog} onClickClose={handleSwitchShowDialog} topBar={dialogTitle}>
                    <DialogContent />
                </Dialog>
            }
        </>
    );
};

export default HomePage;