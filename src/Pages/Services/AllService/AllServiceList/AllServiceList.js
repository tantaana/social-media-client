import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllServiceList = ({ service }) => {
    const { _id, title, img, description, rating, price } = service;
    const shortDes = description.slice(0, 150);
    return (
        <div className='flex justify-center'>
            <PhotoProvider>
                <div className="card lg:card-side lg:w-3/4 bg-blue-600 shadow-xl">
                    <figure><PhotoView src={img}>
                        <img src={img} className="w-96" alt="" />
                    </PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-yellow-500">{title}</h2>
                        <p>{shortDes}...</p>
                        <div className='flex justify-between'>
                            <h3 className='text-2xl font-bold'>Rating: {rating} ⭐⭐⭐</h3>
                            <h3 className='text-white font-bold text-2xl'><span className='text-black'>Price:</span> ${price}</h3>
                        </div>

                        <div className="card-actions flex justify-center md:justify-end">
                            <Link to={`/services/${_id}`}><button className="btn btn-accent">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default AllServiceList;