import React from 'react';
import { Link } from 'react-router-dom';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';


const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Launchtrip</Link>
                <SignedInNav/>
                <SignedOutNav/>
            </div>
        </nav>
    )
};

export default Navbar;