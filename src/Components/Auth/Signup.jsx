import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../Redux/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dispatching signupUser action');
        dispatch(signupUser({ email, password }))
            .then(() => {
                console.log('Signup successful, redirecting to login');
                navigate('/login');
            })
            .catch((error) => {
                console.error('Signup failed:', error);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-3">
                    <h2 className="mb-4">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;