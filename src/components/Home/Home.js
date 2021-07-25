import React from 'react';
import Header from '../MainHomeItem/Header/Header';
import Navbar from '../MainHomeItem/Navbar/Navbar';
import Counter from '../CountEvent/Counter';
import AboutSection from '../MainHomeItem/AboutSection/AboutSection';
import LatestWork from '../MainHomeItem/LatestWork/LatestWork';
import Footer from '../MainHomeItem/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Counter></Counter>
            <AboutSection></AboutSection>
            <LatestWork></LatestWork>
            <Footer></Footer>
        </div>
    );
};

export default Home;