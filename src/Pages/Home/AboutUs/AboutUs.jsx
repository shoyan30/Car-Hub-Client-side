/* eslint-disable no-unused-vars */
import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="hero w-full bg-base-200 border-8 mt-10 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2  relative'>
                    <img src={person} className='w-3/4 rounded-lg border-8 border-gray-900' />
                    <img src={parts} className='w-2/4 absolute right-5 top-1/2 border-8 border-gray-900 rounded-lg'/>
                </div>
                <div className='lg:w-1/2 space-y-7 p-4'>
                    <p className='text-amber-600 font-bold'>About Us</p>
                    <h1 className="text-5xl lg:w-2/3 font-bold">We are qualified & of experience in this field</h1>
                    <p><small>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </small></p>
                    <p><small>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</small></p>
                    <button className="btn bg-red-600 text-white">Get More Inform</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;