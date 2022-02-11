import { useState } from 'react';

import { stringLorem } from '../../../utilities/dummyFunctions';

import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import DateCard from '../../Cards/DateCard';
import Dialog from '../../Dialogs';
import Button from '../../Buttons/Button';
import Paragraph from '../../Text/Paragraph';
import TextButton from '../../Buttons/TextButton';
import TextCard from '../../Cards/TextCard';
import UrlButton from '../../Buttons/UrlButton';

const HomePage = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [showDate, setShowDate] = useState<boolean>(false);
    const [textDate, setTextDate] = useState<string>('View date');

    const openLoginDialog = () => setShowDialog(true);
    const closeLoginDialog = () => setShowDialog(false);

    const handleViewDate = () => {
        setShowDate(!showDate);
        setTextDate(showDate ? 'View date' : 'Hide date');
    };

    return (
        <>
            <Nav title='Home'/>
            <Main>
                <TextCard width='80%'>
                    <Paragraph size={16} weight='bold' color={'primary'} align={'left'}>
                        {stringLorem()}
                    </Paragraph>
                </TextCard>
                <br />
                <TextButton onClick={handleViewDate}>
                    <Paragraph size={16} weight='bold' color={'danger'} align={'left'}>
                        {textDate}
                    </Paragraph>
                </TextButton>
                {showDate && <DateCard dateTime={new Date()} />}
                <br />
                <Button text='Abrir diálogo' onClick={openLoginDialog}
                    width='200px' color='light' backgroundColor='safe' />
                <br />
            </Main>
            <Footer />
            {showDialog &&
                <Dialog onClickClose={closeLoginDialog} id='modal'
                    topBar='Lorem ipsum dolor, sit amet consectetur adipisicing elit'
                >
                    {stringLorem(6)}
                    <br /><br />
                    <UrlButton text='Contact' url='/contact' width='100px' height='fit-content'/>
                </Dialog>
            }
        </>
    )
};

export default HomePage;