import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllTitle from '../../Hooks/AllTitle';
import ServiceList from './ServiceList/ServiceList';

const Services = () => {
    const [services, setServices] = useState([]);

    AllTitle('Services')

    useEffect(() => {
        fetch(`https://docmike-server.vercel.app/services`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-20'>
            <h1 className='text-3xl md:text-4xl text-center font-bold text-red-400'>Services For You Today !</h1>

            <div className='flex flex-col lg:flex-row gap-4 mx-6 my-4'>
                {
                    services.map(service => <ServiceList
                        key={service._id} service={service}
                    ></ServiceList>)
                }
            </div>

            <div className='flex justify-center'>
                <button className="btn btn-outline btn-accent"><Link to='/services'>See All</Link></button>
            </div>
        </div>
    );
};

export default Services;