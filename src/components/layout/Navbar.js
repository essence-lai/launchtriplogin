import React from 'react';
import { Link } from 'react-router-dom';
import SignedInNav from './SignedInNav';
import SignedOutNav from './SignedOutNav';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth, profile } = props;

    const links = auth.uid ? <SignedInNav profile={profile}/>: <SignedOutNav/>

    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Launchtrip</Link>
                { links }

            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(Navbar);