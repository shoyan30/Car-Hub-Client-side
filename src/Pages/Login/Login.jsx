/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../provider/AuthProvider';
import axios from 'axios';
import { linkWithCredential } from 'firebase/auth';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location);
    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(Result => {
                const loggedInUser = Result.user;
                console.log(loggedInUser);
                form.reset();

                //access token

                const user = { email }

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })

            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col lg:flex-row justify-between">
                <div className=" lg:w-1/2 lg:mr-48">

                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>

                        <p className='text-center mt-4'>If You New Here! <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;