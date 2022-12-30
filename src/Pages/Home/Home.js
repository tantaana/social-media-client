import React from 'react';
import AllTitle from '../../Hooks/AllTitle';
import Services from '../Services/Services';
import Hero from './Hero';
import Carousel from './Carousel';
import AddPost from './AddPost';

const Home = () => {
    AllTitle('Home')
    return (
        <div className='mt-20'>
            <Hero></Hero>
            <AddPost></AddPost>
        </div>
    );
};

export default Home;