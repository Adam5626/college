import React from "react";
import "./UserInbox.css";
import Navbar from "./Navbar";
import MessageImage from "../assets/inbox.png"

const UserInbox = () => {
    return ( <>
    <Navbar/>
    <div className="inbox-container">
        <p>Inbox</p>
        <div className="inbox-content">
            
            <div className="inbox-content-left">
                <div className="text-container">
                    <div className="text-buttons">
                        <button>Asad Kamal</button>
                        <button>Open Chat</button>
                    </div>
                    <div className="text-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="text-container">
                    <div className="text-buttons">
                        <button>Asad Kamal</button>
                        <button>Open Chat</button>
                    </div>
                    <div className="text-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="text-container">
                    <div className="text-buttons">
                        <button>Asad Kamal</button>
                        <button>Open Chat</button>
                    </div>
                    <div className="text-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

                <div className="text-container">
                    <div className="text-buttons">
                        <button>Asad Kamal</button>
                        <button>Open Chat</button>
                    </div>
                    <div className="text-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                           eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="inbox-content-right">
                <img src={MessageImage} alt="" />
            </div>
        </div>
    </div>
    </> );
}
 
export default UserInbox;