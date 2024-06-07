/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full" />
                <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white max-w-96 space-y-7 my-auto mx-32'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active text-white font-bold btn-warning mr-4">Discover More</button>
                            <button className="btn text-white btn-outline font-bold btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 lg:top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-4 bg-amber-400">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-amber-400">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white max-w-96 space-y-7 my-auto mx-32'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active text-white font-bold btn-warning mr-4">Discover More</button>
                            <button className="btn text-white btn-outline font-bold btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-4 bg-amber-400">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-amber-400">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white max-w-96 space-y-7 my-auto mx-32'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active text-white font-bold btn-warning mr-4">Discover More</button>
                            <button className="btn text-white btn-outline font-bold btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-4 bg-amber-400">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-amber-400">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                <div className='text-white max-w-96 space-y-7 my-auto mx-32'>
                        <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-active text-white font-bold btn-warning mr-4">Discover More</button>
                            <button className="btn text-white btn-outline font-bold btn-secondary">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-4 bg-amber-400">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-amber-400">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;