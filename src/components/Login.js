import React, { useState } from 'react';

export default function Login({ handleLogin }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        isRemembered: false,
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Login Submitted", formData);
    }

    return (
        <div className='login-form-container'>
            <div id='close-login-btn' className='fas fa-times' onClick={handleLogin}></div>
            <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <span>Username</span>
                <input
                    type="text"
                    placeholder='Email'
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className='box'
                />

                <span>Password</span>
                <input
                    type="password"
                    placeholder='Password'
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    className='box'
                />

                <div className='checkbox'>
                    <input
                        type="checkbox"
                        id="isRemembered"
                        checked={formData.isRemembered}
                        onChange={handleChange}
                        name="isRemembered"
                    />
                    <label htmlFor='isRemembered'>Remember Me</label>
                </div>

                <button type="submit">Sign In</button>
                <p>Forgot password? <a href=''>Click here</a></p>
                <p>Don't have an account? <a href=''>Create one</a></p>
            </form>
        </div>
    );
}
