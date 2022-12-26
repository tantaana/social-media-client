import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllTitle from '../../../Hooks/AllTitle';
import ServiceList from '../ServiceList/ServiceList';
import AllServiceList from './AllServiceList/AllServiceList';

const AllService = () => {
    const [services, setServices] = useState([]);

    AllTitle('Services')

    useEffect(() => {
        fetch(`https://docmike-server.vercel.app/servicesAll`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div>
            <h1 className='text-4xl text-center text-red-400 font-bold my-20'>All Services</h1>

            <div className='flex flex-col gap-4 mx-6 my-4'>
                {
                    services.map(service => <AllServiceList
                        key={service._id} service={service}
                    ></AllServiceList>)
                }
            </div>
        </div>
    );
};

export default AllService;