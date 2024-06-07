/* eslint-disable no-unused-vars */
import React from 'react';
import { CiCalendarDate,  } from "react-icons/ci";
import { MdOutlinePhoneCallback } from 'react-icons/md';
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    return (
        <div className='mb-8 mt-8 mx-h-64 text-white bg-black rounded-xl'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-56'>
                <div className='flex items-center mx-auto '>
                    <div className='text-4xl'>
                        <CiCalendarDate />
                    </div>
                    <div className='ps-4'>
                        <h5>We are open Monda-Friday</h5>
                        <h3 className='text-3xl '>7:00AM-9:00PM</h3>
                    </div>
                </div>
                <div className='flex items-center mx-auto '>
                    <div className='text-4xl'>
                        <MdOutlinePhoneCallback/>
                    </div>
                    <div className='ps-4'>
                        <h5>Have a Question ?</h5>
                        <h3 className='text-3xl '>+2546 251 2658</h3>
                    </div>
                </div>
                <div className='flex items-center mx-auto '>
                    <div className='text-4xl'>
                    <FaLocationDot />
                    </div>
                    <div className='ps-4'>
                        <h5>Need a repair? our address</h5>
                        <h3 className='text-3xl '>Liza Street, New York</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;