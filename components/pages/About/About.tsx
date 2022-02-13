import React, { useState } from 'react';
import styles from './About.styles';
import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import LinkButton from '../../Buttons/LinkButton';
import TextButton from '../../Buttons/TextButton';
import Paragraph from '../../Text/Paragraph';
import DateCard from '../../Cards/DateCard';
import { useRouter } from 'next/router';

type DateCardState = {
    show: boolean,
    text: string,
};

const AboutPage = () => {
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

    return (
        <>
            <Nav title='Acerca de' />
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
                    <LinkButton text='Volver' url='/' />
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default AboutPage;