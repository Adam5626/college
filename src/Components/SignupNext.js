import React from "react";
import "./SignupNext.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const SignupNext = () => {
    const navigation = useNavigate()

    return ( <>
        <Navbar />
        <div className="login-container">
            <div className="login-content">
                <p id="Signup-heading">Signup</p>
                {/* <label for="dob">Date of Birth:</label> */}
                <input type="date" id="dob" name="dob" placeholder="Date of Birth"/>
                <select id="gender" name="gender">
                    <option value="" disabled selected hidden>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input type="text" required placeholder="Education" />
                <button id="signup-button">Signup</button>
            </div>
        </div>
    </> );
}
 
export default SignupNext;