import React, {useState, useEffect} from "react";
import Navbar from "./Navbar";
import "./Login.css"
import { auth } from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login()
{
    const navigation = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login =  ()=>{
         signInWithEmailAndPassword(auth, email, password).then((response)=>{
            console.log("Login Successfull");
            navigation("/userProfile");
        }).catch((error)=>{
            alert(error);
            console.log(error);
        })
    }


    return(
        <>
        <Navbar/>
        <div className="login-container">
            <div className="login-content">
                <p>Login</p>
                <input onChange={(e)=>{setEmail(e.target.value);}} type="email" required placeholder="Email Address"/>
                <input onChange={(e)=>{setPassword(e.target.value);}} type="password" required placeholder="Password" />
                <p>Don’t have an account ? <p className="signup" onClick={() => {navigation('/signup')}}>Signup</p></p>
                <p>Forgot your password ?</p>
                <button onClick={()=>{login();}} id="login-button">Login</button>
            </div>
        </div>
        
        </>
    );
}

export default Login;