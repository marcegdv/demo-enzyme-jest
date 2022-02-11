import React from 'react';
import Nav from '../../Containers/Nav';
import Main from '../../Containers/Main';
import Footer from '../../Containers/Footer';
import UrlButton from '../../Buttons/UrlButton';

const ContactPage = () => {
    return (
        <>
            <Nav title='Contact'/>
            <Main>
                <UrlButton text='Volver' url='/'/>
            </Main>
            <Footer/>
        </>
    )
}

export default ContactPage;