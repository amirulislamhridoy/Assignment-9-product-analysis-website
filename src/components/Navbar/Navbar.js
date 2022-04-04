import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='text-center'>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'link'}>HOME</NavLink>
            <NavLink to="/reviews" className={({ isActive }) => isActive ? 'active-link' : 'link'}>REVIEWS</NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active-link' : 'link'}>DASHBOARD</NavLink>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'active-link' : 'link'}>BLOGS</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : 'link'}>ABOUT</NavLink>
            
        </div>
    );
};

export default Navbar;