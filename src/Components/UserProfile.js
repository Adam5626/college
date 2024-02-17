import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './UserProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import imageDefault from '../assets/image-square.png'
import { useRef, useState } from "react";
import AvatarEditor from 'react-avatar-editor';
/* <FontAwesomeIcon icon={faPen} /> */

const UserProfile = () => {
    const navigation = useNavigate();
    const inputRef = useRef(null);
    const [image, setImage] = useState("");

    const [userName, setUserName] = useState("User Name");
    const [nameEdit, setNameEdit] = useState(true);

    const [userInfo, setUserInfo] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");
    const [infoEdit, setInfoEdit] = useState(true);
    const handleImageClick = (event) => {
        inputRef.current.click();
    }
    const handleInputChange = (e) => {
        setUserName(e.target.value);
    }
    const handleNameClick = () => {
        setNameEdit(!nameEdit);
        console.log("handle name change clicked!");
    }

    const handleImageChange = (event) => {
        // const file = event.target.files[0];
        // console.log(file);
        // const img = document.getElementsByClassName("profile-image")[0];
        // img.style.backgroundImage = `url(${file["name"]})`;
        // setImage(event.target.files[0]);
        const file = event.target.files[0];
        setImage(event.target.files[0]);
    }

    //image cropper
    const [sorce, setSorce] = useState(null);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
    const [editor, setEditor] = useState(null);
    const [croppedImageSrc, setCroppedImageSrc] = useState(null);
    const [showEditor, setShowEditor] = useState(true);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () => setSorce(reader.result));
          reader.readAsDataURL(e.target.files[0]);
          setShowEditor(true);
        }
      };
    const handleSave = () => {
        console.log("handleSave toggled!")
        if (editor) {
          const canvas = editor.getImageScaledToCanvas();
          const croppedImage = canvas.toDataURL('image/png');
          setCroppedImageSrc(croppedImage);
          setShowEditor(false); // Hide the editor
        }
    };

    return ( <>
        <Navbar />
        <div className="profile-container">
        
            <div className="profile-content">
                <div className="info">
                    <div className="profile-image">
                    <FontAwesomeIcon id ="edit_img" icon={faPen} onClick={handleImageClick}/>
                    <input type="file" ref={inputRef} onChange={handleFileChange} style={{display: "none"}}/>
                    {showEditor &&(
                        <div style={{display:"inline-block"}}>
                            {!sorce && <img src={imageDefault} alt="User" />}
                            
                            {sorce && (
                                <div style={{display:"inline-block"}}>
                                <AvatarEditor
                                    ref={(editor) => setEditor(editor)}
                                    image={sorce}
                                    width={250}
                                    height={250}
                                    border={50}
                                    borderRadius={20}
                                    scale={scale}
                                    rotate={0}
                                    position={position}
                                    onPositionChange={(position) => setPosition(position)}
                                    onScaleChange={(scale) => setScale(scale)}
                                />
                                <button onClick={handleSave}>Save</button>
                                </div>
                            )}
                        </div>
                    )}
                    {!showEditor && croppedImageSrc && (
                        <div>
                        <img src={croppedImageSrc} alt="Cropped" />
                        </div>
                    )}

                    </div>

                    <div className="profile-name-info">
                        
                            {/* <p>Muhammad Adam</p> */}
                            <div className="profile-name">
                                <input type="text" defaultValue={userName} readOnly={nameEdit}/>
                                {console.log(nameEdit)}
                                {nameEdit && <FontAwesomeIcon icon={faPen} onClick={handleNameClick}/>}
                                {!nameEdit && <FontAwesomeIcon icon={faCheck} onClick={handleNameClick}/>}
                                
                            </div>
                            
                            <div className="profile-info">
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p> */}
                                <textarea rows="10" cols="50" type="text" defaultValue={userInfo} readOnly={infoEdit}/>
                                {infoEdit && <FontAwesomeIcon icon={faPen} onClick={(e) => {setInfoEdit(!infoEdit)}}/>}
                                {!infoEdit && <FontAwesomeIcon icon={faCheck} onClick={(e) => {setInfoEdit(!infoEdit)}}/>}
                            </div>
                        
                    </div>
                    
                </div>
                <div className="languages">
                    <br />
                    
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