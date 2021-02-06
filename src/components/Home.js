import React from 'react';
import HomeHeader from '../components/HomeHeader';
import ThreeColumns from '../components/ThreeColumns';
import SimpleSteps from '../components/SimpleSteps';
import WhoWeHelp from "../components/WhoWeHelp";
import About from '../components/About';
import Contacts from "../components/Contacts";
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <HomeHeader />
        <ThreeColumns />
        <SimpleSteps />
        <About />
        <WhoWeHelp />
        <Contacts />
        <Footer/>
        </>
    )
};

export default Home;