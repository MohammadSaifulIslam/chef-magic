import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import RecipeCard from '../../../Cards/RacipeCard/RecipeCard';
import LoadingSpinner from '../../../others/LoadingSpinner/LoadingSpinner';

const ChefRecipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foodRecipesData, setFoodRecipesData] = useState([])
  const chefData = useLoaderData()
  useEffect(() => {
    fetch(`https://chef-magic-server-saifmdislam231-gmailcom.vercel.app/chef-recipes/${id}`)
      .then(res => res.json())
      .then(data => setFoodRecipesData(data))
    setIsLoading(false)
  }, [])
  const { id, name, bio, picture, recipes, likes, experience } = chefData;

  if(isLoading){
    return <LoadingSpinner></LoadingSpinner>
  }
  
  return (
    <div className='my-container mt-20'>
      <div className="section-title text-center mb-10">
        <h5 className='text-4xl font-bold mb-2'>Meet Our Chef</h5>
        <p className='md:w-1/2 mx-auto'>At Chef's Magic, our expert chefs are the backbone of our restaurant. They are skilled and passionate about their craft, creating magic with each dish they prepare.</p>
      </div>
      {/* chef's banner start*/}
      <div className="banner grid md:grid-cols-3 gap-6 items-center">
        <div ><img src={picture} alt="chef's picture" className='h-96' /></div>
        <div className=" font-semibold text-base md:col-span-2">
          <h3 className='text-3xl font-bold mb-5'>{name}</h3>
          <p className='mb-8 font-semibold'><span className='text-[#82B440]'>Bio:</span> {bio}</p>
          <p className='mb-1'>Years of experience: <span className='text-[#82B440]'>{experience}</span></p>
          <p className='mb-1'>Numbers of recipes: <span className='text-[#82B440]'>{recipes}</span></p>
          <p className='mb-5'>Totall Likes: <span className='text-[#82B440]'>{likes}</span></p>
        </div>
      </div>
      {/* chef's banner end*/}

      {/* chef's food recipe part start */}
      <div className="mt-10 section-title text-center mb-10">
        <h5 className='text-4xl font-bold mb-2'>Chef's Special Recipes</h5>
        <p className='md:w-1/2 mx-auto  '>At Chef's Magic, our expert chefs are the backbone of our restaurant. They are skilled and passionate about their craft, creating magic with each dish they prepare.</p>
      </div>
      <div className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {
          foodRecipesData.map(foodRecipe => <RecipeCard
            key={foodRecipe.id}
            foodRecipe={foodRecipe}
          ></RecipeCard>)
        }
      </div>
      {/* chef's food recipe part end */}

    </div>
  );
};

export default ChefRecipes;