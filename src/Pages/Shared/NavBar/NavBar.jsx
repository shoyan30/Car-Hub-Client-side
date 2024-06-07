/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../provider/AuthProvider';
const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
    </>
    return (
        <div className="navbar mb-8 mt-2 bg-pink-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost content-center">
                    <img className='h-20 w-20' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navItems}
                </ul>
            </div>

            
            <div className="navbar-end mr-8">
                <button className="btn btn-outline ">Appointment</button>
            </div>

            <div>
                {user ? <button className='text-lg btn btn-outline' onClick={handleLogOut} >LogOut</button> :
                    <Link to='/login'><button className='text-lg btn btn-outline'>Login</button></Link>

                }
            </div>
        </div>
    );
};

export default NavBar;