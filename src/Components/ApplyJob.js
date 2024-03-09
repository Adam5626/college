import React from "react";
import "./ApplyJob.css";
import Navbar from "./Navbar";

const ApplyJob = () => {
    return ( <>
        <Navbar />
        <div className="ApplyJob-container">
            <div className="ApplyJob-content">
                <div className="ApplyJob-header">
                    <div className="ApplyJob-header-left">
                        <p>Need Tutor for English</p>
                        <button>Asad Kamal</button>
                    </div>
                    <div className="ApplyJob-header-right">
                        <p>130%/60 min</p>
                    </div>
                </div>

                <div className="job-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="job-proposal">
                    <textarea cols="78" rows="17" placeholder="Write your prosposal."></textarea>
                </div>
                <div className="job-rate">
                <textarea cols="14" rows="1" placeholder="Rate / 60 mins"></textarea>
                </div>
                <div className="job-apply">
                    <button>Apply</button>
                </div>
            </div>
        </div>
    </> );
}
 
export default ApplyJob;