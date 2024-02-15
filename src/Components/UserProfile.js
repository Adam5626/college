import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import imageDefault from '../assets/image-square.png'
import { useRef, useState } from "react";
/* <FontAwesomeIcon icon={faPen} /> */

const UserProfile = () => {
    const navigation = useNavigate();
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const handleImageClick = (event) => {
        inputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(event.target.files[0]);
    }

    return ( <>
        <Navbar />
        <div className="profile-container">
            
            <div className="profile-content">
                <div className="info">
                    <div className="profile-image">

                        {image ? <img src={URL.createObjectURL(image)} alt="User" /> : <img src={imageDefault} alt="User" />}
                        <FontAwesomeIcon icon={faPen} onClick={handleImageClick}/>
                        <input type="file" ref={inputRef} onChange={handleImageChange} style={{display: "none"}}/>

                    </div>

                    <div className="profile-info">
                        <div className="profile-name">
                            <h2>User Name</h2>
                        </div>
                        <div className="profile-info">
                            <h2>Info</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="languages">
                    <h1>Languages</h1>
                </div>
                <div className="education">
                    <h1>Education</h1>
                </div>
                <div className="reviews">
                    <h1>Reviews</h1>
                </div>
            </div>

        </div>
    </> );
}
 
export default UserProfile;