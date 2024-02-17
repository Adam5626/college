import React, {useState, useContext} from "react";
import "./SignupNext.css"
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext/userContext";
import { auth } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const SignupNext = () => {
    const navigation = useNavigate();
    const user_context = useContext(userContext);
    const [dob, setDob] = useState();
    const [gender, setGender] = useState("");
    const [education, setEducation] = useState("");

    const signup_s2 = async ()=>{
        createUserWithEmailAndPassword(auth, user_context.state_["email"], user_context.state_["password"]).then((response)=>{
            console.log("User Created Successfully");
        }).catch((error)=>{
            alert(error);
        })

        const user_collection = collection(db, "user_profiles");
        const data = {
            "name" : user_context.state_["name"],
            "email" : user_context.state_["email"],
            "gender" : gender,
            "education" : education,
            "dob" : dob
        };

        await addDoc(user_collection, data).then((response)=>{
            console.log("Saved !");
        }).catch((error)=>{
            alert(error);
        })
    }


    return ( <>
        <Navbar />
        <div className="login-container">
            <div className="login-content">
                <p id="Signup-heading">Signup</p>
                {/* <label for="dob">Date of Birth:</label> */}
                <input onChange={(e)=>{setDob(e.target.value);}} type="date" id="dob" name="dob" placeholder="Date of Birth"/>
                <select onChange={(e)=>{setGender(e.target.value);}} id="gender" name="gender">
                    <option value="" disabled selected hidden>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input onChange={(e)=>{setEducation(e.target.value);}} type="text" required placeholder="Education" />
                <button onClick={()=>{signup_s2();}} id="signup-button">Signup</button>
            </div>
        </div>
    </> );
}
 
export default SignupNext;