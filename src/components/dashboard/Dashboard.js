import React, { Component } from 'react';
import UserDetails from '../users/UserDetails';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render () {
        const { auth, profile } = this.props;

        if(!auth.uid) return <Redirect to='/signin'/>;

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <UserDetails profile={profile}/>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
};

export default connect(mapStateToProps)(Dashboard);