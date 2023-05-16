import React from 'react';
import about1 from '../../../assets/about/restaurant-8.jpg'
import about2 from '../../../assets/about/restaurant-9.jpg'
const About = () => {
    return (
        <div className='my-container mt-24'>
            <div className="section-title text-center mb-10">
                <h5 className='text-4xl font-bold mb-2'>About Us</h5>
                <p className='md:w-1/2 mx-auto  '>We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="about-text items-center">
                    <h4 className='text-4xl font-bold'>The Secret is at the Table and The Natural Light Food</h4>
                    <p className=' mt-12 mb-5 '>Chef's Magic is a premier restaurant that serves the finest cuisine using only the freshest ingredients. Our menu is a blend of traditional and contemporary dishes prepared by expert chefs. The ambiance is warm and inviting, and our staff provides exceptional service. We cater to all dietary needs and offer a range of cocktails, beers, and wines. Come and experience the magic of our restaurant today!</p>
                    <p className=''>Our attentive and friendly staff are always on hand to provide you with exceptional service and to ensure that your dining experience is one to remember. We cater to all dietary needs and preferences, so whether you're a vegetarian or a meat lover, you'll find something to love on our menu.</p>
                </div>
                <div className="about-img grid grid-cols-2 gap-4 ">
                    <img className='object-cover h-96' src={about1} alt="" />
                    <img className='object-cover h-96' src={about2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;