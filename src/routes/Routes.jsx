import React from 'react';
import Main from '../Layouts/Main';
import { createBrowserRouter} from "react-router-dom";

import Home from '../Pages/HomePage/Home/Home';
import Blog from '../Pages/BlogPage/Blog/Blog';
import Login from '../others/Login/Login';
import Register from '../others/Register/Register';
import ChefRecipes from '../Pages/ChefRecipesPage/ChefRecipes/ChefRecipes';
import RecipeDetails from '../Pages/RecipeDetailsPage/RecipeDetails/RecipeDetails';
import ErrorPage from '../others/ErrorPage/ErrorPage';
import MenuHome from '../Pages/MenuPage/MenuHome/MenuHome';
import ContactHome from '../Pages/ContactPage/ContactHome/ContactHome';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import FavoriteDishPage from '../Pages/FavoriteDishPage/FavoriteDishPage';
import UserProfileHome from '../Pages/UserProfilePage/UserProfileHome/UserProfileHome';
import TermsAndConditions from '../others/TermsAndConditions/TermsAndConditions';
import ResetPassword from '../others/ResetPassword/ResetPassword';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'menu',
                element: <MenuHome></MenuHome>,
            },
            {
                path: 'contact',
                element: <ContactHome></ContactHome>
            },
            {
                path: 'chef-recipes/:id',
                element: <PrivateRoutes><ChefRecipes /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://chef-magic-server-saifmdislam231-gmailcom.vercel.app/chef/${params.id}`)
            },
            {
                path: 'recipe-details/:id',
                element: <PrivateRoutes><RecipeDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://chef-magic-server-saifmdislam231-gmailcom.vercel.app/recipe-details/${params.id}`)
            },
            {
                path: 'favorite-dish',
                element: <PrivateRoutes><FavoriteDishPage /></PrivateRoutes>,
                loader: () => fetch('https://chef-magic-server-saifmdislam231-gmailcom.vercel.app/menu')
            },
            {
                path: 'user-profile',
                element: <PrivateRoutes><UserProfileHome /></PrivateRoutes>
            },
            {
                path: 'terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'reset-password',
                element: <ResetPassword></ResetPassword>
            },
        ]
    },
]);



export default router;