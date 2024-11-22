import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="container mt-5">
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
};

export default Profile;