import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

import banner1 from '../../../assets/banner/baner (1).jpg';
import banner2 from '../../../assets/banner/baner (3).jpg';
import banner3 from '../../../assets/banner/baner (4).jpg';

import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className='h-[calc(100vh-80px)] w-full '>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper w-full"
            >
                <SwiperSlide className='relative'><img className='w-full h-full block ' src={banner1} alt="" />
                    <div className="hero-overlay pl-0 md:pl-5 absolute object-cover bg-opacity-20 flex items-center justify-center md:justify-start text-white">
                        <div className="text-left my-container">
                            <h5 className='uppercase text-xl font-semibold'>Affordable prices to anyone</h5>
                            <h1 className='uppercase text-3xl md:text-7xl mt-5 font-bold tracking-wide'>Choose and taste
                                <br />
                                to your place</h1>
                                <Link to='/menu' ><button className='my-btn mt-5 flex gap-2'>Order Now <ArrowRightIcon className="h-6 w-6"/></button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className='w-full h-full block' src={banner2} alt="" />
                    <div className="hero-overlay pl-0 md:pl-5 absolute object-cover bg-opacity-20 flex items-center justify-center md:justify-start text-white">
                        <div className="text-left my-container">
                            <h5 className='uppercase text-xl font-semibold'>Affordable prices to anyone</h5>
                            <h1 className='uppercase text-3xl md:text-7xl mt-5 font-bold tracking-wide'>Choose and taste
                                <br />
                                to your place</h1>
                                <Link to='/menu' ><button className='my-btn mt-5 flex gap-2'>Order Now <ArrowRightIcon className="h-6 w-6"/></button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img className='w-full h-full block' src={banner3} alt="" />
                    <div className="hero-overlay pl-0 md:pl-5 absolute object-cover bg-opacity-20 flex items-center justify-center md:justify-start text-white">
                        <div className="text-left my-container">
                            <h5 className='uppercase text-xl font-semibold'>Affordable prices to anyone</h5>
                            <h1 className='uppercase text-3xl md:text-7xl mt-5 font-bold tracking-wide'>Choose and taste
                                <br />
                                to your place</h1>
                                <Link to='/menu' ><button className='my-btn mt-5 flex gap-2'>Order Now <ArrowRightIcon className="h-6 w-6"/></button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;