/* eslint-disable no-unused-vars */
import React from 'react';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'

import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Teams = () => {
    return (
        <div>
            <div className='text-center mt-10 space-y-4'>
                <h1 className='font-bold text-red-600'>Team</h1>
                <h1 className='text-4xl font-bold'>Meet Our Team</h1>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        
                        <h2 className="card-title">Engineer</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>Engine Expart</p>
                        <div className='font-bold text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaSquareInstagram/>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        
                        <h2 className="card-title">Engineer</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>Engine Expart</p>

                        <div className='font-bold text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaSquareInstagram/>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        
                        <h2 className="card-title">Engineer</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>Engine Expart</p>
                        <div className='font-bold text-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaSquareInstagram/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Teams;