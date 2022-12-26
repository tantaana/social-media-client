import React, { useContext, useEffect, useState } from 'react';

const UserReviewData = ({ _id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://docmike-server.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            {reviews.length > 0 ? <h3 className='text-3xl font-bold mb-10'>User Review ⭐</h3> : ''}
            {reviews.length > 0 ?
                <>{reviews.map(review =>
                    <div className='flex py-4 gap-6'>
                        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" className='w-[100px] h-[70px]' alt="" />

                        <div className=''>
                            <h3 className='text-md'>By <span className='font-bold text-red-400'>{review.user_Name}</span></h3>
                            <h3 className='text-md font-bold text-accent'>email: {review.email}</h3>
                            <h3 className='text-xl break-normal'>❝ {review.Message} ❞</h3>
                        </div>
                    </div>)}</> : <h3 className='text-3xl font-bold text-red-500'>No Review Yet!</h3>
            }
        </div>
    );
};

export default UserReviewData;