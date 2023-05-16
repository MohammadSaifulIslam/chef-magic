import React, { useEffect, useState } from 'react';
import { getFromDb, removeFromDb } from '../../utility/fakeDb';
import { useLoaderData } from 'react-router-dom';
import FavoriteDishCard from '../../Cards/FavoriteDisfCard/FavoriteDishCard';
import { toast } from 'react-hot-toast';
import LoadingSpinner from '../../others/LoadingSpinner/LoadingSpinner';

const FavoriteDishPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [favoriteDises, setFavoriteDises] = useState([])
    const data = useLoaderData()

    const handleRemoveItem = id =>{
        const remainig = favoriteDises.filter(dish => dish.id !== id);
        setFavoriteDises(remainig)
        removeFromDb(id)
        toast.success('Dish removed from favorite😢')
    }

    useEffect(() => {
        const favoriteDisesData = getFromDb();
        const favoriteArr = [];
        for (const id in favoriteDisesData) {
            const dish = data.find(food => food.id == id)
            favoriteArr.push(dish)
        }
        setFavoriteDises(favoriteArr)
        setIsLoading(false);
    }, data)

    if(isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='my-container mt-24 py-5 min-h-[calc(100vh-200px)]'>
             <div className="section-title text-center mb-10">
                <h5 className='text-4xl font-bold mb-2'>Your Favorite Dishes</h5>
                <p className='md:w-1/2 mx-auto  '>We specialise in intelligent & effective Search and believes in the power of partnerships to grow business.</p>
            </div>
            <div className='flex justify-center'>
            <ul className='divide-y divide-gray-700 '>
                {
                   favoriteDises.length > 0 ? favoriteDises.map(fDish =>
                        <FavoriteDishCard
                            key={fDish.id}
                            fDish={fDish}
                            handleRemoveItem={handleRemoveItem}
                        ></FavoriteDishCard>
                    )
                    : <div className='text-2xl font-semibold text-[#82B440]'>You have no favorite dish. Please Add a favorite dish</div>
                }
            </ul>
            </div>

        </div>
    );
};

export default FavoriteDishPage;