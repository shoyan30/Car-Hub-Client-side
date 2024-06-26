/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
const SignUp = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handlesignup = event =>{

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            event.target.reset()
            navigate('/')
        })
        .catch(error =>{
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

                    <form onSubmit={handlesignup} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>

                        <p className='text-center mt-4'>Aleady Have An Account!<Link className='text-orange-500 font-bold' to='/login'>  Login</Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default SignUp;