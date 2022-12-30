import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/signup.gif'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth';
import AllTitle from '../../Hooks/AllTitle';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { user, createUser, updateUserProfile, providerLogin } = useContext(AuthContext);

    AllTitle('SignUp')

    const googleLogIn = new GoogleAuthProvider();

    const handleGoogle = () => {
        providerLogin(googleLogIn)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user.uid) {
                    toast.success('Successfully signed up')
                }
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/popup-closed-by-user).") {
                    toast.error('Could not sign in. Please try again')
                }
            })
    }



    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                handleUserInfo(name)
                navigate(from, { replace: true })
                window.location.reload();
                toast.success('Successfully signed up')
            })
            .catch(err => {
                console.error(err.message);
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    toast.error('User Already Exists !')
                }
                if (err.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    toast.error('Password should be at least 6 characters')
                }
            })


    }

    const handleUserInfo = name => {
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }


    return (
        <div className='mt-20 flex justify-center'>
            <div className="hero py-20 bg-red-200 mx-20 rounded-2xl">
                <div className="hero-content flex-col xl:flex-row gap-40">
                    <div className="lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-300">

                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-4xl md:text-5xl font-bold text-center mb-10"><span className='text-black'>Sign Up</span></h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Full Name 🖋️</span>
                                </label>
                                <input type="text" name="name" placeholder="Type your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Email 📧</span>
                                </label>
                                <input type="email" name="email" placeholder="Type your email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Your Password 🔐</span>
                                </label>
                                <input type="password" name="password" placeholder="Type your password" className="input input-bordered" required />
                                <div className="form-control mt-6">
                                    <button className='btn btn-primary' type="submit">Sign Up</button>
                                </div>
                            </div>
                        </form>

                        <h3 className='text-center text-2xl font-bold mb-6'>OR</h3>
                        <button onClick={handleGoogle} className='btn btn-ghost mb-6 mx-8 flex justify-evenly'><span className='text-2xl'><FaGoogle /></span><span>SignUp with Google</span></button>
                        <h3 className='text-lg font-bold  mb-10 text-center mx-4'>Already have an account? <Link className='text-red-500 font-bold' to='/login'>Login</Link> here</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;