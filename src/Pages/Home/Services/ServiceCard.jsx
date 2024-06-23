/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    // console.log(service);

    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body relative">
                <h2 className="card-title">{title}</h2>
                <p className='text-red-600 font-bold'>Price: ${price}</p>
                <div className="card-actions absolute mt-10 right-5 ">
                    <Link to={`/checkout/${_id}`}>
                        <button><FaArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;