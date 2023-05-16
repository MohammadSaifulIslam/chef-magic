import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const ChefCard = ({ chefData }) => {
    const { id, name, picture, recipes, likes, experience } = chefData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl ">
            <figure className='h-78'>
                <LazyLoad className='w-full h-72' threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                    <img className='object-cover' src={picture} alt="Chef's picture" />
                </LazyLoad>
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{name}</h2>
                <div className="">
                    <p className='font-semibold  text-base mb-1'>Years of experience: {experience}</p>
                    <p className='font-semibold  text-base mb-1'>Numbers of recipes: {recipes}</p>
                    <p className='font-semibold  text-base mb-5'>Totall Likes: {likes}</p>
                    <Link to={`/chef-recipes/${id}`}><button className="my-btn w-full">View Recipes</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;