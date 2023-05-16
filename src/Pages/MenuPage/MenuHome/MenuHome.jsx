import { HeartIcon, StarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb } from '../../../utility/fakeDb';
import LoadingSpinner from '../../../others/LoadingSpinner/LoadingSpinner';

const MenuHome = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allMenu, setAllMenu] = useState([]);

    const handleAddToFavorite = (id) => {
        toast.success('Successfully Added to Favorite!')
        addToDb(id)
    }
    useEffect(()=>{
        fetch('https://chef-magic-server-saifmdislam231-gmailcom.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            setAllMenu(data)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
       return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className=' my-container mt-24'>
            <div className="section-title text-center mb-10">
                <h5 className='text-4xl font-bold mb-2'>Our Delicious Menu</h5>
                <p className='md:w-1/2 mx-auto  '>We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.</p>
            </div>
            <div className="overflow-x-auto">

                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Favorite</th>
                            <th>Order Now</th>
                        </tr>
                    </thead>
                    <tbody className='mt-5'>
                        {
                            allMenu.map(food => <tr
                                key={food.id}
                            >
                                <th>{food.id}</th>
                                <td>
                                    <img className='w-16 h-16' src={food.image} alt="" />
                                </td>
                                <td>{food.name}</td>
                                <td>${food.price}</td>
                                <td>
                                    <Rating
                                        placeholderRating={food.rating}
                                        emptySymbol={<StarIcon className='h-6 w-6' />}
                                        placeholderSymbol={<StarIcon className='h-6 w-6 text-warning' />}
                                        fullSymbol={<StarIcon className='h-6 w-6 text-warning' />}
                                        readonly
                                    />
                                </td>
                                <td>
                                    <HeartIcon onClick={() => handleAddToFavorite(food.id)} className={`h-6 w-6 cursor-pointer`}></HeartIcon>
                                </td>
                                <td>
                                    <Link to={`/recipe-details/${food.id}`} className='my-btn '>View Details</Link>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MenuHome;