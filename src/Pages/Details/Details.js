import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import userImg from '../../assets/user.png'

const Details = () => {
    const details = useLoaderData();
    const { userName, userPhoto, time, post, picURL } = details;
    return (
        <div className='my-10 shadow-2xl rounded-2xl bg-blue-200 p-10 m-20'>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-10">
                <div className='rounded-2xl bg-red-200'>
                    <div className='m-4 p-2 flex items-center gap-6'>
                        {userPhoto !== null ?
                            <img src={userPhoto} className="h-[50px] w-[50px] rounded-full" alt="" />
                            :
                            <img src={userImg} className="h-[40px] w-[30px] rounded-full" alt="" />
                        }
                        <div>
                            <h2 className='text-xl font-bold'>{userName}</h2>
                            <h2 className='text-md'><span className='font-bold'>Posted on:</span> {time}</h2>
                        </div>
                    </div>
                    <p className='text-lg font-semibold m-4'>{post}</p>
                </div>

                <figure><img src={picURL} className="" alt="" /></figure>


            </div>
            <div className='flex justify-end'>
                <Link to='/media'><button className='btn btn-xs md:btn-sm btn-success my-6 font-bold md:text-xl text-sm'>Go back</button></Link>
            </div>
        </div>
    );
};

export default Details;