import React , {useContext, useEffect, useState} from "react";
import "./Signup.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext/userContext";


const Signup = () => {
    const navigation = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_context = useContext(userContext);

    const signup_s1 = ()=>{
        user_context.update("name", name);
        user_context.update("email", email);
        user_context.update("password", password);
        navigation("/signupnext");
    }

    return ( <>
        <Navbar />
        <div className="login-container">
            <div className="login-content">
                <p id="Signup-heading">Signup</p>
                <input onChange={(e)=>{setName(e.target.value);}} type="text" required placeholder="Name"/>
                <input onChange={(e)=>{setEmail(e.target.value);}} type="email" required placeholder="Email Address"/>
                <input onChange={(e)=>{setPassword(e.target.value);}} type="password" required placeholder="Password" />
                <p id="error101">Already have an account? <p className="signup" onClick={() => {navigation('/login')}}>Login</p></p>
                <button id="next-button" onClick={() => { signup_s1(); }}>Next</button>
            </div>
        </div>
    </> );
}
 
export default Signup;