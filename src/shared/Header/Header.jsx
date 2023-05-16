import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const [theme, setTheme] = useState('light');
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    // theme toggle

    const toggleTheme = () => {
        setTheme(theme === 'forest' ? 'light' : 'forest');
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className=' bg-black sticky top-0 z-30'>
            <nav className="my-container navbar text-white py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu uppercase menu-compact font-semibold dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black">
                            <li><NavLink to='/' className={({ isActive }) =>
                                isActive ? "text-[#82B440]" : ''}>
                                HOME</NavLink></li>
                            <li><NavLink to='/menu' className={({ isActive }) =>
                                isActive ? "text-[#82B440]" : ''}>
                                MENU</NavLink></li>
                            <li><NavLink to='/favorite-dish' className={({ isActive }) =>
                                isActive ? "text-[#82B440]" : ''}>
                                FAVORITE Dish</NavLink></li>
                            <li><NavLink to='/blog' className={({ isActive }) =>
                                isActive ? "text-[#82B440]" : ''}>
                                BLOG</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) =>
                                isActive ? "text-[#82B440]" : ''}>
                                CONTACT</NavLink></li>
                            <li>
                            <input onClick={toggleTheme} type="checkbox" className="toggle ml-3" />
                            </li>
                            {
                                user &&
                                <button onClick={handleLogout} className='my-btn my-2'>Logout</button>
                            }

                        </ul>
                    </div>
                    <Link to='/' className="font-bold text-xl md:text-3xl" style={{ fontFamily: ['Bruno Ace SC', 'cursive'] }}>Chef's Magic</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 px-1 font-semibold uppercase">
                        <li><NavLink to='/' className={({ isActive }) =>
                            isActive ? "text-[#82B440]" : ''}>
                            HOME</NavLink></li>
                        <li><NavLink to='/menu' className={({ isActive }) =>
                            isActive ? "text-[#82B440]" : ''}>
                            MENU</NavLink></li>
                        <li><NavLink to='/favorite-dish' className={({ isActive }) =>
                            isActive ? "text-[#82B440]" : ''}>
                            FAVORITE Dish</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) =>
                            isActive ? "text-[#82B440]" : ''}>
                            BLOG</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) =>
                            isActive ? "text-[#82B440]" : ''}>
                            CONTACT</NavLink></li>
                        <li>
                            <input onClick={toggleTheme} type="checkbox" className="toggle ml-3" />
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && <button onClick={handleLogout} className='my-btn hidden lg:block'>Logout</button>
                    }
                    {user ?
                        <Link to='/user-profile' className="hover-text h-10 w-10 ml-4 cursor-pointer">
                            <img className='w-full h-full rounded-full' src={user?.photoURL} alt="" title='djflajeriouq' />
                            <span className="tooltip-text" id="left">{user?.displayName}</span>
                        </Link>

                        : <Link to='/login' className='my-btn ml-4'>Login</Link>
                    }
                </div>

            </nav>
        </div>
    );
};

export default Header;