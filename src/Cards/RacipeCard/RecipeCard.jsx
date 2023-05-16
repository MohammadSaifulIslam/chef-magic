import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
import Rating from 'react-rating';
import { StarIcon } from '@heroicons/react/24/solid';
import { addToDb } from '../../utility/fakeDb';

const RecipeCard = ({ foodRecipe }) => {
  const { id, name, image, ingredients, method, rating } = foodRecipe;
  const [disable, setDisable] = useState(false)

  const handleAddToFavorite = (id) => {
    setDisable(true)
    toast.success('Successfully Added to Favorite!')
    addToDb(id)
  }
  return (
    <div className="card card-compact bg-base-100 shadow-xl">

      <figure>
        <LazyLoad className='w-full h-72' threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
          <img className='h-72 w-full object-center' src={image} alt="Shoes" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#82B440]">{name}</h2>
        <div className='mt-0'>
          <p className='text-base font-medium'>Ingredients: </p>
          {
            ingredients.length > 5 ? <div>
              {
                (ingredients.slice(0, 5).map((ingredient, indx) => <span key={indx}> {ingredient},</span>))
              }
              <span>...</span>
            </div>
              : ingredients.map((ingredient, indx) => <span key={indx}> {ingredient},</span>)
          }


        </div>
        <p><span className='text-base font-medium block'>Cooking Method:</span> {method.slice(0, 50)}...</p>
        <div className='flex items-center gap-2'><span className='text-base font-medium'>Rating:</span>
          <Rating
            placeholderRating={rating}
            emptySymbol={<StarIcon className='h-6 w-6' />}
            placeholderSymbol={<StarIcon className='h-6 w-6 text-warning' />}
            fullSymbol={<StarIcon className='h-6 w-6 text-warning' />}
            readonly
          />
        </div>
        <button onClick={() => handleAddToFavorite(id)} disabled={disable} className={`${disable ? ' cursor-not-allowed bg-red-500 px-8 py-2 font-semibold uppercase rounded-md text-white border border-red-500 opacity-80 duration-300' : 'btn-outline'}`}>Add Favorite</button>
        <Link to={`/recipe-details/${id}`} className='my-btn text-center'>View Details</Link>
      </div>
    </div>
  );
};

export default RecipeCard;