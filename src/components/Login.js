//mongodb+srv://<username>:<password>@cluster0.vcsfwxk.mongodb.net/?retryWrites=true&w=majority

import React, { useState } from 'react';

function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''    
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });
    
            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
            } else {
                const error = await response.json();
                console.error('Login failed:', error);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };
    

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;