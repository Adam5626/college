import React, {useState, useEffect} from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import userContext from "./userContext/userContext";
import { useContext } from "react";
function Navbar()
{
    const user_context = useContext(userContext);
    const [targetStatus, setTargetStatus] = useState(user_context.state_["target_state"]);

    const navigation = useNavigate();
    const [menuStatus, setMenuStatus] = useState(false);
    const handle_menu = ()=>{
        // const menu = document.getElementById("menu_card");
        // if(menuStatus === false)
        // {
        //     menu.style.transform = "translateX(0)";
        //     setMenuStatus(true);
        // }
        // else{
        //     menu.style.transform = "translateX(1000px)";
        //     setMenuStatus(false);
        // }
        setMenuStatus(!menuStatus);

    }

    const handle_target_status = ()=>{
        if(targetStatus === "Provider"){
            setTargetStatus("Student");
            user_context.update("current_state", "Provider");
            user_context.update("target_state", "Student");
        }
        else if(targetStatus === "Student")
        {
            setTargetStatus("Provider");
            user_context.update("current_state", "Student");
            user_context.update("target_state", "Provider");
        }

        console.log(user_context.state_);
    }




    return(
        <>
        <div id="main_navbar">
            <div id="main_nav_left">
                <h2 onClick = {()=>{navigation("/")}}>HS2-Academy</h2>
            </div>

            <div id="main_nav_right">
                <p onClick = {()=>{navigation("/login")}}> Login</p>
                <p onClick={() => {navigation('/signup')}}>Signup</p>
                <p onClick={()=>{handle_target_status();}}>{targetStatus}</p>
            </div>

            <div onClick={()=>{handle_menu();}} id="main_menu">
                <div id="l1"></div>
                <div id="l2"></div>
                <div id="l3"></div>
            </div>

            
        </div>
        { menuStatus && (
            <div id="menu_card">
            <p onClick = {()=>{navigation("/login")}}>Login</p>
            <p onClick = { () => {navigation("/signup")} }>Signup</p>
            <p>Provider</p>
        </div>
        )}
        
        </>
    );
}

export default Navbar;