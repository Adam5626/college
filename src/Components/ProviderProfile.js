import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import './ProviderProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import imageDefault from '../assets/image-square.png'
import langImage from '../assets/lang.png'
import { useRef, useState } from "react";
import AvatarEditor from 'react-avatar-editor';
import Select from "react-select";
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from 'react-icons/fa'
/* <FontAwesomeIcon icon={faPen} /> */

const ProviderProfile = () => {
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
          const saveStyle = document.getElementsByClassName("languages")[0];
          saveStyle.style.marginTop = "10%";

          const infoStyle = document.getElementsByClassName("profile-name-info")[0];
          infoStyle.style.marginLeft = "10%";
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
        const saveStyle = document.getElementsByClassName("languages")[0];
        saveStyle.style.marginTop = "0%";

        const infoStyle = document.getElementsByClassName("profile-name-info")[0];
        infoStyle.style.marginLeft = "1%";
    };

    //Selectbox for languages
    const languages = [
        {value: "ENGLISH", label: "English"},
        {value: "SPANISH", label: "Spanish"},
        {value: "URDU", label: "Urdu"},
        {value: "PUNJABI", label: "Punjabi"},
        {value: "CHINESE ", label: "Chinese"},
        {value: "JAPANESE", label: "Japanese"},
        {value: "BANGALI", label: "Bangali"},
        {value: "HINDI", label: "Hindi"},
        {value: "PROTUGUESE", label: "Portuguese"},
        {value: "RUSSIAN", label: "Russian"},
    ]
    const [displayOptions, setDisplayOptions] = useState(false);
    const [newLanguage, setNewLanguage] = useState("");
    const [languageAdded, setLanguageAdded] = useState(false);
    const [check, setCheck] = useState(true);
    const handleLanguageClick = () => {
        setDisplayOptions(true);
        setCheck(false);
    }
    let events; 
    const handleLanguageChange = (event) => {
        console.log(event);
        events = event;
        console.log(typeof events);
        console.log(events.map(lang => (lang.label)));
        setNewLanguage(events.map(lang => (lang.label)));
        setLanguageAdded(true);
        
    }
    console.log(events);
    const handleAppendClick= () => {
        setDisplayOptions(false);
        setCheck(true);
    }


    //rating
    const [rating, setRating] = useState(3);


    function resizeInput() {
        const input = document.getElementById('dynamic-input');
        const textWidth = getTextWidth(input.value, window.getComputedStyle(input).font);
        input.style.width = `${textWidth}px`;
      }
  
    function getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
      }
    // function resizeTextarea() {
    //     const textarea = document.getElementById('dynamic-textarea');
    //     textarea.style.height = 'auto'; // Reset textarea height to auto
    //     textarea.style.height = `${textarea.scrollHeight}px`; // Set textarea height based on content
    //   }
    return ( <>
        <Navbar />
        <div className="profile-container">
        
            <div className="profile-content">
                <div className="info">
                    <div className="profile-image">
                    
                    {showEditor &&(
                        <div className="editAvatar" id="editAvatarId">
                            {!sorce && <img src={imageDefault} alt="User" />}
                            
                            {sorce && (
                                <div >
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
                                <button id="saveImgButton" onClick={handleSave}>Save</button>
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
                    <FontAwesomeIcon id ="edit_img" icon={faPen} onClick={handleImageClick}/>
                    <input type="file" ref={inputRef} onChange={handleFileChange} style={{display: "none"}}/>
                    <div className="profile-name-info">
                        
                            {/* <p>Muhammad Adam</p> */}
                            <div className="profile-name">
                                <input type="text" defaultValue={userName} readOnly={nameEdit} id="dynamic-input" onInput={resizeInput}/>
                                {console.log(nameEdit)}
                                {nameEdit && <FontAwesomeIcon icon={faPen} onClick={handleNameClick} id="nameEdit"/>}
                                {!nameEdit && <FontAwesomeIcon icon={faCheck} onClick={handleNameClick} className="check"/>}
                                
                            </div>
                            
                            <div className="profile-info">

                                <textarea rows="8" cols="48" type="text" defaultValue={userInfo} readOnly={infoEdit}/>
                                {infoEdit && <FontAwesomeIcon icon={faPen} className="editImage" onClick={(e) => {setInfoEdit(!infoEdit)}}/>}
                                {!infoEdit && <FontAwesomeIcon icon={faCheck} className="check" onClick={(e) => {setInfoEdit(!infoEdit)}}/>}
                            
                            </div>
                        
                    </div>
                    
                </div>
                <div className="services">
                    <p id="services-heading">Services <FontAwesomeIcon id="plus-icon" icon={faPlus} /></p>
                    
                    <div className="service-title">
                        <p> English Tutoring </p>
                        
                    </div>
                    <div className="service-charge">
                        <p>100$ </p>
                        <p>/ 60 min</p>
                    </div>
                    <div className="service-info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="service-title">
                        <p> Punjabi Tutoring </p>
                        
                    </div>
                    <div className="service-charge">
                        <p>100$ </p>
                        <p>/ 60 min</p>
                    </div>
                    <div className="service-info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className="service-title">
                        <p> Persian Tutoring </p>
                        
                    </div>
                    <div className="service-charge">
                        <p>100$ </p>
                        <p>/ 60 min</p>
                    </div>
                    <div className="service-info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="message-provider">
                    <p>Message Adam</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>

                <div className="languages">
                    <br />
                    <div className="language-heading">
                        <p>Languages</p>
                        {check && <FontAwesomeIcon icon={faPen} id="lang" onClick={handleLanguageClick}/>}
                        {!check && <FontAwesomeIcon icon={faCheck} className="check" onClick={handleAppendClick} style={{marginTop:"2.5%"}}/>} 
                        
                    </div>
                    <div className="languages-list">
                        {displayOptions && <Select id="languageSelect"  options={languages} onChange={handleLanguageChange} isMulti/>}
                        {/* isMulti */}
                    </div>
                    {/* {languageAdded && <div className="languages-list">
                        <img src={langImage} alt="language symbol" />
                        <p>{ newLanguage }</p>
                    </div>} */}
                    {languageAdded && <div className="languages-list">
                        {newLanguage.map(lang=> (
                            <div key={lang} className="language-item"> 
                                <img src={langImage} className="languageImage" alt="language symbol" />
                                <p>{lang}</p>
                            </div>
                        ))}
                        
                        {/* <p>{ newLanguage }</p> */}
                    </div>}

                </div>
                <div className="education-container">
                    <p>Education</p>
                    <div className="education">
                    <FontAwesomeIcon icon={faGraduationCap} id="education-icon"/>
                    <p> Uneducated retard </p>
                    </div>
                </div>
                <div className="review-container">
                    <p>Reviews</p>
                    <div className="review">
                        <div className="review-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="review-details">
                            <p>Erika M.</p>
                            <p> 12th December, 2023</p>
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <FaStar 
                                    className="star" 
                                    size={18}
                                    color={currentRating <= (rating) ? "#ffc107" : "#e4e5e9"}
                                    />
                                )
                            })}
                        </div>

                    </div>

                    <div className="review">
                    <div className="review-message">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="review-details">
                            <p>Erika M.</p>
                            <p> 12th December, 2023</p>
                            {[...Array(5)].map((star, index) => {
                                const currentRating = index + 1;
                                return (
                                    <FaStar 
                                    className="star" 
                                    size={18}
                                    color={currentRating <= (rating) ? "#ffc107" : "#e4e5e9"}
                                    />
                                )
                            })}

                        </div>
                    </div>
                    
                </div>
            </div>
            

        </div>
    </> );
}
 
export default ProviderProfile;