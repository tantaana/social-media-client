import React from 'react';
import img1 from '../../assets/tans.png'

const Hero = () => {
    return (
        <div className='flex justify-center mb-20'>
            <div className="hero bg-base-200 w-5/6">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="w-1/2 md:w-1/3 lg:w-1/5" />
                    <div>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold"><span className='text-yellow-500'>Hi!</span> I'm Dentist <span className='text-red-500'>Mike</span></h1>
                        <p className="py-6">Been servicing as a professional dentist since 1992. I've serviced more than 1200+ patients who had problems with their teeth and gum. It's a pleasure for me to give them the best treatment. </p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className="btn btn-secondary text-xl text-white">When to come to a dentist? 🦷</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;