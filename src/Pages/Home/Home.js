import React from 'react';
import AllTitle from '../../Hooks/AllTitle';
import Services from '../Services/Services';
import Hero from './Hero';
import Carousel from './Carousel';

const Home = () => {
    AllTitle('Home')
    return (
        <div className='mt-20'>
            <Hero></Hero>
            <Services></Services>
            <Carousel></Carousel>

        </div>
    );
};

export default Home;