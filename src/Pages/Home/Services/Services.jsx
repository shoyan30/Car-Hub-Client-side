/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {

    const [services, SetServices] = useState([])

    useEffect( ()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => SetServices(data))
    }, [] )
    return (
        <div className='mt-8'>
            <div className='text-center'>
                <h3 className="text-2xl font-bold text-orange-600">Services</h3>
                <h2 className="text-5xl">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6'>
                {
                    services.map(service =><ServiceCard
                    
                        key={service._id}
                        service= {service}
                    
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;