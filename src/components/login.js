//https://medium.com/@thirdmarch0303/building-a-simple-login-and-signup-with-react-773ad5444fbc

import React, { useState } from "react";

const Login = () => 
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) =>
    {
        e.preventDefault();
    };

    return (
        <div>
            <h2>Login to Your Account</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;