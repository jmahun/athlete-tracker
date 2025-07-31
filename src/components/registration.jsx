//https://medium.com/@thirdmarch0303/building-a-simple-login-and-signup-with-react-773ad5444fbc

import React, { useState } from "react";

const Registration = () =>
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();

        //check if 'password' and 'confirm password' match
        if(password !== confirmPassword)
        {
            alert("Warning! Passwords do not match!");
            return;
        }
        console.log("Signup username:", username);
    };

    return (
        <div>
            <h2>Register for an Account</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange = {(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registration;