import React from "react";
import Navbar from "./Navbar";
import "./Login.css"

function Login()
{
    return(
        <>
        <Navbar/>
        <div className="login-container">
            <div className="login-content">
                <p>Login</p>
                <p>Student</p>
                <input type="email" required placeholder="Email Address"/>
                <input type="password" required placeholder="Password" />
                <p>Don’t have an account ? Signup Forgot your password ?</p>
                <button id="login-button">Login</button>
            </div>
        </div>
        
        </>
    );
}

export default Login;