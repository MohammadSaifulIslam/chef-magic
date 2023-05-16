import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ClientReview.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import client1 from '../../../assets/client-review/client (1).jpg'
import client2 from '../../../assets/client-review/client (2).jpg'
import client3 from '../../../assets/client-review/client (3).jpg'
import Rating from 'react-rating';
import { StarIcon } from '@heroicons/react/24/solid';

const ClientReview = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
    return (
        <div className='my-container mt-24'>
            <div className="section-title text-center mb-10">
                <h5 className='text-4xl font-bold mb-2'>Client's Review</h5>
                <p className='md:w-1/2 mx-auto  '>The client review section at Chef's Magic provides valuable firsthand accounts of the dining experience. </p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client1} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Yamin Amin</h3>
                        <Rating
                            placeholderRating={5}
                            emptySymbol={<StarIcon className='h-6 w-6'/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p>"I recently dined at Chef's Magic and was blown away by the experience. The food was absolutely incredible, with each dish expertly prepared and bursting with flavor. The atmosphere was warm and inviting, and the staff were attentive and friendly, making me feel right at home. I also appreciated that they were able to accommodate my dietary needs without compromising on taste or quality. Overall,"</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client3} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Moin Ali</h3>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<StarIcon className='h-6 w-6 '/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p>"Chef's Magic is hands down one of the best restaurants I've ever been to. The food is out of this world, with each dish surpassing the last in terms of taste and presentation. The ambiance is perfect for a romantic dinner or a night out with friends, and the staff are always friendly and accommodating."</p>
                   
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-5 mb-10'>
                        <img src={client2} alt="" className='img w-10 h-10 rounded-full' />
                        <h3 className=' text-2xl font-bold mb-4'>Sabbir Hossain</h3>
                        <Rating
                            placeholderRating={4.5}
                            emptySymbol={<StarIcon className='h-6 w-6 '/>}
                            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            fullSymbol={<StarIcon className='h-6 w-6 text-warning'/>}
                            readonly
                        />
                        <p className=''>"I was blown away by the level of expertise and attention to detail at Chef's Magic. The chefs truly work magic in the kitchen, creating dishes that are both visually stunning and incredibly delicious. The service was top-notch, and the staff were knowledgeable about the menu and wine pairings. I will definitely be back and can't recommend Chef's Magic enough!"</p>
                     
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default ClientReview;