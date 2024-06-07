/* eslint-disable no-unused-vars */
import React from 'react';
import p1 from '../../../assets/images/products/1.png'
import p2 from '../../../assets/images/products/2.png'
import p3 from '../../../assets/images/products/3.png'
import p4 from '../../../assets/images/products/4.png'
import p5 from '../../../assets/images/products/5.png'
import p6 from '../../../assets/images/products/6.png'

import { FaStar } from "react-icons/fa";

const Products = () => {
    return (
        <div>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-red-600'>Popular Products</h1>
                <h1 className='text-4xl font-bold'>Browse Our Products</h1>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p1} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='text-yellow-500 font-bold flex '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p2} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='text-yellow-500 font-bold flex '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p3} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='text-yellow-500 font-bold flex '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p4} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='text-yellow-500 font-bold flex '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p5} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='text-yellow-500 font-bold flex '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>$20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={p6} alt="Shoes" className="rounded-xl h-72 w-72" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='text-yellow-500 font-bold flex '>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className='text-yellow-400 font-bold text-2xl'>$20.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;