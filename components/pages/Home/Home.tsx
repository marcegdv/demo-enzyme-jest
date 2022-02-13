import React, { useState } from 'react';
import { stringLorem } from '../../../utilities/dummyFunctions';

import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import Dialog from '../../Dialog';
import DivButton from '../../Buttons/DivButton';
import Paragraph from '../../Text/Paragraph';
import TextCard from '../../Cards/TextCard';
import UrlButton from '../../Buttons/UrlButton';

const HomePage = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false);

    const openLoginDialog = () => setShowDialog(true);
    const closeLoginDialog = () => setShowDialog(false);

    return (
        <>
            <Nav title='Inicio'/>
            <Main>
                <TextCard width='80%'>
                    <Paragraph size={16} weight='bold' color={'primary'} align={'left'}>
                        {stringLorem()}
                    </Paragraph>
                </TextCard>
                <br />
                <DivButton text='Abrir diálogo' onClick={openLoginDialog}
                    width='200px' color='light' backgroundColor='safe' />
                <br />
            </Main>
            <Footer />
            {showDialog &&
                <Dialog onClick={closeLoginDialog} onClickClose={closeLoginDialog} id='modal'
                    topBar='Lorem ipsum dolor, sit amet consectetur adipisicing elit'
                >
                    {stringLorem(6)}
                    <br /><br />
                    <UrlButton text='Contact' url='/contact' width='100px' height='fit-content'/>
                </Dialog>
            }
        </>
    );
};

export default HomePage;