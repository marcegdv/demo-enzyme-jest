import React, { useState } from 'react';
import styles from './Contact.styles';
import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import UrlButton from '../../Buttons/UrlButton';
import TextButton from '../../Buttons/TextButton';
import Paragraph from '../../Text/Paragraph';
import DateCard from '../../Cards/DateCard';
import { useRouter } from 'next/router';

type DateCardState = {
    show: boolean,
    text: string,
};

const ContactPage = () => {
    const router = useRouter();
    const [card, setCard] = useState<DateCardState>({
        show: false,
        text: 'Ver fecha actual',
    });

    const handleViewDate = () => {
        setCard({
            show: !card.show,
            text: (card.show ? 'Ver fecha actual' : 'Ocultar fecha'),
        });
    };

    const handleClickHome = () => {
        router.push('/');
    };

    return (
        <>
            <Nav title='Contacto' />
            <Main>
                <div className={styles.dateCard}>
                    <TextButton onClick={handleViewDate}>
                        <Paragraph size={16} weight='bold' color={'danger'} align={'left'}>
                            {card.text}
                        </Paragraph>
                    </TextButton>
                </div>
                {card.show && <DateCard dateTime={new Date()} />}
                <div className={styles.backButton}>
                    <UrlButton text='Volver' onClick={handleClickHome} />
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default ContactPage;