import React, { Component } from 'react';
import UserDetails from '../users/UserDetails';

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12">
                        <UserDetails/>
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard;