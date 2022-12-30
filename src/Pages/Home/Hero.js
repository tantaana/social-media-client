import React from 'react';
import img1 from '../../assets/tans.gif'

const Hero = () => {
    return (
        <div className='flex justify-center mb-20'>
            <div className="hero bg-green-200 w-5/6 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={img1} className="w-full md:w-1/2" />
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold"><span className='text-red-400'>Welcome to </span>Socio<span className='text-purple-600'>ME</span></h1>
                        <p className="py-6">It is a right place for you to instant chatting, messaging, calling and more !</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;