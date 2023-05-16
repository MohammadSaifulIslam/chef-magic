import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Chefs from '../Chefs/Chefs';
import ClientReview from '../ClientReview/ClientReview';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Chefs></Chefs>
            <ClientReview></ClientReview>
            <Contact></Contact>
        </div>
    );
};

export default Home;