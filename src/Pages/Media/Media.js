import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import userImg from '../../assets/user.png'
import AllTitle from '../../Hooks/AllTitle';
import AddPost from '../Home/AddPost';

const Media = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://docmike-server-tantaana.vercel.app/postdata')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const [increaseLove, setIncreaseLove] = useState(0);

    const handleIncrease = () => {
        const loveNumber = 1;
        setIncreaseLove(increaseLove + 1);
    }

    AllTitle('Media')


    return (
        <div className='mx-10 my-10'>
            <h2 className='text-4xl text-center my-20 font-bold text-purple-600'>All Posts</h2>
            <PhotoProvider>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        posts.reverse().map(post =>

                            <div className="card card-compact shadow-2xl bg-blue-200">
                                <div className='m-4 p-2 flex items-center gap-6'>
                                    {post.userPhoto !== null ?
                                        <img src={post.userPhoto} className="h-[50px] w-[50px] rounded-full" alt="" />
                                        :
                                        <img src={userImg} className="h-[40px] w-[30px] rounded-full" alt="" />
                                    }
                                    <div>
                                        <h2 className='text-xl font-bold'>{post.userName}</h2>
                                        <h2 className='text-md'><span className='font-bold'>Posted on:</span> {post.time}</h2>
                                    </div>
                                </div>
                                <div className="card-body mb-6">
                                    <h2 className="card-title"></h2>
                                    <p className='text-lg font-semibold m-4'>{post.post}</p>
                                    <Link to={`/details/${post._id}`}><button className='btn btn-info btn-xs w-[80px] font-bold'>Details</button></Link>
                                </div>
                                <figure><PhotoView src={post.picURL}><img src={post.picURL} className="h-[400px] w-[250px] sm:w-[600px] object-cover mb-10" alt="" /></PhotoView></figure>

                            </div>
                        )
                    }
                </div>
            </PhotoProvider>
        </div>
    );
};

export default Media;