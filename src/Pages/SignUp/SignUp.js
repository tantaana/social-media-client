import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/signup.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider } from 'firebase/auth';
import AllTitle from '../../Hooks/AllTitle';

const SignUp = () => {

    const [error, setError] = useState(null)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { user, createUser, providerLogin } = useContext(AuthContext);

    AllTitle('SignUp')

    const googleLogIn = new GoogleAuthProvider();

    const handleGoogle = () => {
        providerLogin(googleLogIn)
            .then(result => {
                const users = result.user;
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err);
                setError("User could not sign in. Please try again.");
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
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err);
                setError("User Already Exist !")
            })
    }

    return (
        <div className='mt-20 flex justify-center'>
            <div className="hero py-20 bg-base-200 mx-20">
                <div className="hero-content flex-col xl:flex-row gap-40">
                    <div className="lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-5xl font-bold text-center mb-10"><span className='text-yellow-500'>Sign Up</span></h1>

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
                                    <button className='btn btn-secondary' type="submit">Sign Up</button>
                                </div>
                            </div>
                            <h3 className='text-2xl text-center font-bold text-red-400 mt-4'>{error}</h3>
                        </form>

                        <h3 className='text-center text-2xl font-bold mb-6'>OR</h3>
                        <button onClick={handleGoogle} className='btn btn-primary mb-6 mx-8 flex justify-evenly'><span className='text-2xl'><FaGoogle /></span><span>SignUp with Google</span></button>
                        <h3 className='text-lg font-bold  mb-10 text-center'>Already have an account? <Link className='text-red-400 font-bold' to='/login'>Login</Link> here</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;