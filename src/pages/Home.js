import React from 'react';
import Ecommerce from '../components/Ecommerce';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
    return(
    <>
        <Navigation />
        <Header />
        <Ecommerce />
        <Footer />
    </>
    );
}

export default Home;