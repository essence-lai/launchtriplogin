import React from 'react';
import moment from 'moment';

const UserDetails = ({ profile })  => {
    return (
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">{ profile.firstName } { profile.lastName }</span>
                <p>Created At: { profile && profile.createdAt? moment(profile.createdAt.toDate()).calendar(): ''}</p>
            </div>
            <div className="card-action">
                <div className="row">
                    <div className="col s4 m4">
                        Email: { profile.email }
                    </div>

                    <div className="col s4 m4">
                        Cities Visited: { profile.citiesBeen }
                    </div>

                    <div className="col s4 m4">
                        Favourite City: { profile.favCity ? profile.favCity: 'Yet to find!'}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserDetails;