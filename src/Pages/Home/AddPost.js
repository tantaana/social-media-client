import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import img1 from '../../assets/type.gif'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)

    const handlePost = event => {
        event.preventDefault();
        const form = event.target;
        const postdata = form.postdata.value;

        const pics = form.pics.files[0];
        const formData = new FormData();
        formData.append('image', pics);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        //get time
        const getTime = new Date();

        const time = getTime.toLocaleTimeString("en-US", {
            month: "short",
            day: 'numeric',
            hour: "2-digit",
            minute: "2-digit"
        });

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const userData = {
                        userName: user.displayName,
                        userPhoto: user.photoURL,
                        post: postdata,
                        picURL: imgData.data.url,
                        time: time
                    }
                    fetch('https://docmike-server-tantaana.vercel.app/posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                    toast.success('Your post has been added !');
                }
            })

    }
    return (
        <div className='flex justify-center mb-20'>
            <div className="hero bg-red-200 w-5/6 rounded-2xl">
                <div className="hero-content flex-col">
                    <h2 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold mt-4'>Write, Upload and Post !</h2>
                    <div className='hero-content flex-col lg:flex-row gap-20'>
                        <form action="" onSubmit={handlePost}>
                            <div className='flex justify-center'>
                                <div>
                                    <h2 className='mb-4 text-center text-2xl'>What's on your mind?</h2>
                                    <textarea className="textarea textarea-ghost border-secondary mb-4 bg-transparent w-full" name="postdata" placeholder="Write !" required></textarea>
                                </div>
                            </div><br />

                            <div className='flex justify-center'>
                                <div>
                                    <h2 className='mb-4 text-center text-2xl'>Which pic do you wanna upload?</h2>
                                    <div className='flex justify-center'>
                                        <input type="file" name="pics" className="file-input file-input-bordered file-input-secondary w-full max-w-xs bg-transparent mb-4" required />
                                    </div>
                                </div>
                            </div><br />

                            <div className='flex justify-center'>
                                <input type="submit" name="submit" value="Add your post !" className='btn btn-secondary' />
                            </div>
                        </form>

                        <img src={img1} className="w-full lg:w-1/2 xl:w-2/3" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;