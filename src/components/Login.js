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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
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