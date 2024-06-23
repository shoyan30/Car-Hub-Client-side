/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../provider/AuthProvider';
import '../../../../src/App.css'

const NavBar = () => {
    const { user, logOut, theme, toggleTheme } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            });
    };

    const navItems = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {user?.email && <li><Link className='bg-yellow-500 mr-4' to='/bookings'>Bookings</Link></li>}
        </>
    );

    return (
        <div className="navbar mb-8 mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-400 text-white rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost content-center">
                    <img className='h-20 w-20' src={logo} alt="Logo" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end flex items-center">
                {/* <button className="text-lg btn btn-outline mr-2" onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
                </button> */}
                {user ? (
                    <button className='text-lg btn btn-outline' onClick={handleLogOut}>LogOut</button>
                ) : (
                    <Link to='/login'><button className='text-lg login btn btn-outline'>Login</button></Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
