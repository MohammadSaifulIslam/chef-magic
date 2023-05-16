import React from 'react';

const FavoriteDishCard = ({ fDish,handleRemoveItem }) => {
    const { id, image, price, name } = fDish;
    return (
        <li className='flex flex-col py-6 sm:flex-row sm:justify-between'>
            <div className='flex w-full space-x-2 sm:space-x-4'>
                <img
                    className='flex-shrink-0 object-cover border-transparent rounded outline-none w-32 h-32 bg-gray-500'
                    src={image}
                    alt='Polaroid camera'
                />
                <div className='flex flex-col justify-between w-full pb-4'>

                    <div className='space-y-1'>
                        <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                            Dish Name: {name}
                        </h3>
                    </div>
                    <p className='text-lg font-semibold'>Price: ${price}</p>
                    <button onClick={()=>handleRemoveItem(id)} type='button' className='my-btn w-fit ml-auto'>Remove</button>
                </div>
            </div>
        </li>
    )
}
export default FavoriteDishCard;