import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUserTie } from 'react-icons/fa'
import userImg from '../../../assets/user.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => console.error(err))

    }
    return (
        <div className=''>
            <div className="navbar bg-base-200 xl-flex flex-none justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost xl:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-bold'><Link to='/'>Home</Link></li>
                            <li className='font-bold'><Link to='/media'>Media</Link></li>
                            <li className='font-bold'><Link to='/message'>Message</Link></li>
                            <li className='font-bold'><Link to='/about'>About</Link></li>

                            {user?.uid ?
                                <div>
                                    <li className='font-bold mb-4' onClick={handleLogOut}><Link>Log Out</Link></li>
                                    <div className='flex items-center rounded p-1 bg-purple-400'>
                                        <h5 className='font-bold text-black mr-4'>{user.displayName}</h5>
                                        <>{user.photoURL ?
                                            <img className="rounded-full" data-toggle="tooltip" data-placement="bottom" title={user?.displayName} style={{ height: '30px' }} src={user.photoURL} />
                                            :
                                            <img className="rounded-full" data-toggle="tooltip" data-placement="bottom" title={user?.displayName} style={{ height: '30px' }} src={userImg} />}</>
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
                    <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold"><span className='text-black'>Socio</span><span className='text-purple-600'>ME</span></Link>
                </div>
                <div className="navbar-center hidden xl:flex border border-red">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link className='font-bold text-xl' to='/'>Home</Link></li>
                        <li><Link className='font-bold text-xl' to='/media'>Media</Link></li>
                        <li><Link className='font-bold text-xl' to='/message'>Message</Link></li>
                        <li><Link className='font-bold text-xl' to='/about'>About</Link></li>

                        <div>{user?.uid ?
                            <div className='flex'>
                                <li onClick={handleLogOut}><Link className='font-bold text-xl'>Log Out</Link></li>
                                <div className='flex border bg-purple-400 items-center gap-4 p-2 rounded-2xl'>
                                    <h5 className='text-xl text-black font-bold'>{user.displayName}</h5>
                                    <>{user.photoURL ?
                                        <img className='rounded-full' style={{ height: '40px' }} src={user.photoURL} />
                                        :
                                        <img className='rounded-full' style={{ height: '40px' }} src={userImg} />}</>
                                </div>
                            </div>
                            :
                            <>
                                <div className='flex'>
                                    <li><Link className='font-bold text-xl' to="/login">Login</Link></li>
                                    <li><Link className='font-bold text-xl' to='/signup'>Sign Up</Link></li>
                                    <li><h2><FaUserTie className='text-white text-2xl' /></h2></li>
                                </div>
                            </>}</div>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;