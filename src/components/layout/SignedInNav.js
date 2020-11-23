import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInNav = (props) => {
    return (
        <ul className="right">
            <li><a onClick={ props.signOut } href='/'>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating grey lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(SignedInNav);