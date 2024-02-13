import React from "react";
import Navbar from "./Navbar";
import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login()
{
    const navigation = useNavigate();
    return(
        <>
        <Navbar/>
        <div className="login-container">
            <div className="login-content">
                <p>Login</p>
                <p>Student</p>
                <input type="email" required placeholder="Email Address"/>
                <input type="password" required placeholder="Password" />
                <p>Don’t have an account ? <p className="signup" onClick={() => {navigation('/signup')}}>Signup</p></p>
                <p>Forgot your password ?</p>
                <button id="login-button">Login</button>
            </div>
        </div>
        
        </>
    );
}

export default Login;