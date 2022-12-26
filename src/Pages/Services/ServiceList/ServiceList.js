import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import AllTitle from '../../../Hooks/AllTitle';

const ServiceList = ({ service }) => {
    const { _id, title, img, description, rating, price } = service;
    const sliced = description.slice(0, 100)
    return (
        <div>
            <PhotoProvider>
                <div className="card xl:card-side bg-blue-600 shadow-xl">
                    <figure><PhotoView src={img}>
                        <img src={img} className="rounded" alt="" />
                    </PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-yellow-500">{title}</h2>
                        <p>{sliced}....</p>
                        <h3 className='text-xl font-bold mb-6'>Rating: {rating}⭐⭐⭐</h3>
                        <div className="card-actions flex justify-between items-center">
                            <h2 className='text-xl font-bold'><span className='text-black'>Price:</span> ${price}</h2>
                            <Link to={`/services/${_id}`}><button className="btn btn-accent">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>

    );
};

export default ServiceList;