import React from "react";
import "./Signup.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const navigation = useNavigate()

    return ( <>
        <Navbar />
        <div className="login-container">
            <div className="login-content">
                <p id="Signup-heading">Signup</p>
                <input type="text" required placeholder="Name"/>
                <input type="email" required placeholder="Email Address"/>
                <input type="password" required placeholder="Password" />
                <p id="error101">Already have an account? <p className="signup" onClick={() => {navigation('/login')}}>Login</p></p>
                <button id="next-button" onClick={() => { navigation('/signupnext') }}>Next</button>
            </div>
        </div>
    </> );
}
 
export default Signup;