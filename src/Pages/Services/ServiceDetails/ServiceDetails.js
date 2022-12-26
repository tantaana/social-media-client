import React from 'react';
import { useLoaderData } from 'react-router';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import UserReview from '../../UserReview/UserReview';

const ServiceDetails = () => {
    const details = useLoaderData();
    const { title, description, rating, img, price } = details;
    return (
        <div className='mt-20'>
            <PhotoProvider>
                <div className="hero bg-base-300">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <PhotoView src={img}><img src={img} className="sm:w-5/6 md:w-5/6 lg:w-1/2 rounded-lg shadow-2xl" /></PhotoView>

                        <div>
                            <h1 className="text-5xl font-bold text-yellow-500 mb-6">{title}</h1>
                            <p className="py-6">{description}</p>
                            <h3 className='text-xl mb-6'>User review: <span className='font-bold text-2xl'>{rating}⭐⭐⭐</span></h3>
                            <h3 className='text-3xl font-bold mb-6'><span className='text-red-400'>Price:</span> ${price}</h3>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </PhotoProvider>

            <UserReview details={details}></UserReview>
        </div>
    );
};

export default ServiceDetails;