import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import UserReviewData from './UserReviewData';
import toast, { Toaster } from 'react-hot-toast';

const UserReview = ({ details }) => {
    const { user } = useContext(AuthContext);
    const { _id, title } = details;

    const handleReviewAdd = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const review = {
            service: details._id,
            title: title,
            user_Name: name,
            Message: message,
            email: email
        }

        console.log(review)

        fetch('https://docmike-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully');
                    form.reset();
                    window.location.reload(false);

                }
            })
    }



    return (
        <div>
            <div className="hero bg-base-300 mt-20">
                <div className="hero-content flex-col lg:flex-row lg:justify-between lg:gap-48">

                    <UserReviewData _id={_id}></UserReviewData>
                    <form onSubmit={handleReviewAdd}>
                        <h4 className='text-4xl mb-10 text-center'>Chosen Treatment : <span className='font-bold text-red-400'>{title}</span></h4>
                        {user ? <><div className='flex flex-col'>
                            <h3 className='text-md font-bold mb-10'>Please write your review below ✔️</h3>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="" className="input input-bordered w-full max-w-xs mb-6" disabled />
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-6" required />
                            <textarea name="message" className="textarea textarea-info mb-6" placeholder="Please write your message here" required></textarea>
                        </div>

                            <input className='btn btn-accent' type="submit" value="Add Review" /></> :
                            <h3 className='text-center text-xl text-red-500 font-bold'>Please <Link className='text-white' to='/login'>Login</Link> first to add your review</h3>}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UserReview;