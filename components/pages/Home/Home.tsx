import React, { useState } from 'react';
import { stringLorem } from '../../../utilities/dummyFunctions';
import styles from './home.styles';

import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import Dialog from '../../Dialog';
import DivButton from '../../Buttons/DivButton';
import Paragraph from '../../Text/Paragraph';
import TextCard from '../../Cards/TextCard';
import LinkButton from '../../Buttons/LinkButton';

const HomePage = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const handleSwitchShowDialog = () => {
        setShowDialog(!showDialog)
    };

    const MainCards = (): JSX.Element => {
        return (
            <>
                <TextCard width='80%' size={16} weight='normal' color={'danger'} align={'left'} text={stringLorem()}/>
                <TextCard width='80%' size={16} weight='bold' color={'warning'} align={'right'} text={stringLorem()}/>
            </>
        );
    };

    const dialogTitle = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit';
    const DialogContent = (): JSX.Element => {
        return (
            <>
                <Paragraph size={14} weight='bold' color={'secondary'}>
                    {stringLorem(4)}
                </Paragraph><br />
                <Paragraph size={14} weight='bold' color={'safe'} align='center'>
                    {stringLorem()}
                </Paragraph><br />
                <LinkButton text='Acerca de' url='/about' width='100px' height='fit-content' />
            </>
        );
    };

    return (
        <>
            <Nav title='Inicio' />
            <Main>
                <div className={styles.main_content}>
                    <MainCards />
                    <DivButton text='Abrir diálogo' height='48px'
                        onClick={handleSwitchShowDialog}
                        width='200px' color='light' backgroundColor='safe' tabIndex={1} />
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