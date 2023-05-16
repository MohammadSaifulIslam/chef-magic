import React from 'react';
import { useLoaderData} from 'react-router-dom';
import { toast } from 'react-hot-toast';

const RecipeDetails = () => {

    const recipeDetails = useLoaderData();
    const { id, price, name, image, ingredients, method, rating } = recipeDetails

    const handleOrder =()=>{
        toast.success('Your Order Have Successfully Placed!')
    }

    return (
        <div className="mx-5 md:mx-10 p-5 mt-24 relative grid md:grid-cols-2 gap-5 lg:card-side rounded-lg shadow-xl">
            <figure><img className='bg-cover bg-center object-cover h-96 md:h-[500px] w-full' src={image} alt="Album" /></figure>
            <div className="md:py-5">
                <h2 className="text-3xl font-bold mb-5">Recipe Name: <span className='text-[#82B440] '>{name}</span></h2>
                <p className='text-base font-bold'>Ingredients: </p>
                {
                    ingredients.map((ingredient, indx) => <span key={indx}> {ingredient},</span>)
                }
                <p className='text-base font-bold mt-5'>Cooking Method:</p>
                <div>
                    {
                        method.length > 400 ?
                            <p>{method.slice(0, 400)}</p>
                            : <p>{method}</p>

                    }

                </div>
                <div className="flex justify-between mt-5">
                    <p className='text-base font-bold '>Price: $<span className='text-[#82B440]'>{price}</span></p>
                    <p className='text-base font-bold'>Rating: <span className='text-[#82B440]'>{rating}</span></p></div>
                <div className="lg:absolute lg:bottom-5 mt-5">
                    <button onClick={handleOrder} className="my-btn">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;