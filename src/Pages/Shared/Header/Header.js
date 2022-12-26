import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserTie } from 'react-icons/fa'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold'><Link to='/'>Home</Link></li>
                            <li className='font-bold'><Link to='/services'>Services</Link></li>
                            <li className='font-bold'><Link to='/blogs'>Blogs</Link></li>

                            {user?.uid ?
                                <div>
                                    <li><Link to='/myreviews' className='font-bold'>My Reviews</Link></li>
                                    <li><Link to='/addservice' className='font-bold'>Add Service</Link></li>
                                    <li className='font-bold' onClick={handleLogOut}><Link>Log Out</Link></li>
                                    <div className='flex gap-8 items-center'>
                                        <h5 className='font-bold text-red-400'>{user.displayName}</h5>
                                        <img className="rounded-full" data-toggle="tooltip" data-placement="bottom" title={user?.displayName} style={{ height: '30px' }} src={user.photoURL} />
                                    </div>
                                </div>
                                :
                                <>
                                    <div>
                                        <li className='font-bold'><Link to="/login">Login</Link></li>
                                        <li className='font-bold'><Link to='/signup'>Sign Up</Link></li>
                                        <li><h2><FaUserTie className='text-white text-2xl' /></h2></li>
                                    </div>
                                </>}

                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold"><span className='text-white'>⛑️Doc</span><span className='text-red-500 text-4xl'>Mike</span><span>.com</span></Link>
                </div>
                <div className="navbar-center hidden xl:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='font-bold text-xl' to='/'>Home</Link></li>
                        <li><Link className='font-bold text-xl' to='/services'>Services</Link></li>
                        <li><Link className='font-bold text-xl' to='/blogs'>Blogs</Link></li>

                        <li>{user?.uid ?
                            <div>
                                <li><Link to='/myreviews' className='font-bold text-xl'>My Reviews</Link></li>
                                <li><Link to='/addservice' className='font-bold text-xl'>Add Service</Link></li>
                                <li onClick={handleLogOut}><Link className='font-bold text-xl'>Log Out</Link></li>
                                <h5 className='text-xl text-red-400 font-bold'>{user.displayName}</h5>
                                <img className='rounded-full' style={{ height: '40px' }} src={user.photoURL} />
                            </div>
                            :
                            <>
                                <div className='d-flex'>
                                    <li><Link className='font-bold text-xl' to="/login">Login</Link></li>
                                    <li><Link className='font-bold text-xl' to='/signup'>Sign Up</Link></li>
                                    <li><h2><FaUserTie className='text-white text-2xl' /></h2></li>
                                </div>
                            </>}</li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;