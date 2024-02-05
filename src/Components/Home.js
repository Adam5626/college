import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import home_img from "../assets/home_img.png";

function Home()
{
    return(
        <>
        <Navbar/>
        <div id="home_container">
            <div id="home_content">
                <div id="home_content_left">
                    <p>Unlock your potential as an educator with  us where passion meets opportunity! Join us to connect with eager learners, set your own schedule, and be part of a supportive community. Elevate your tutoring career and shape the future of education!</p>
                    <button>Find Providers</button>
                </div>

                <div id="home_content_right">
                    <img src = {home_img} alt = "home_icon"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;