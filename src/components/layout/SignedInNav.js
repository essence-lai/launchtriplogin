import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInNav = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating grey lighten-1'>EL</NavLink></li>
        </ul>
    )
};

export default SignedInNav;