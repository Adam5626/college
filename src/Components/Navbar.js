import React, {useState} from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar()
{

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
    return(
        <>
        <div id="main_navbar">
            <div id="main_nav_left">
                <h2 onClick = {()=>{navigation("/")}}>HS2-Academy</h2>
            </div>

            <div id="main_nav_right">
                <p onClick = {()=>{navigation("/login")}}> Login</p>
                <p onClick={() => {navigation('/signup')}}>Signup</p>
                <p>Provider</p>
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