import React from "react";
import "./ViewProviders.css";
import Navbar from "./Navbar";
import { useState } from "react";


const ViewProvider = () => {
    const [categoriesOption, setCategoriesOption] = useState('');
    const [ratesOption, setRatesOption] = useState('');

    const handleCategoryChange = (event) => {
        setCategoriesOption(event.target.value);
    };
    const handleRatesChange = (event) => {
        setRatesOption(event.target.value);
    };
    return ( <>
        <Navbar/>
        <div className="view-providers-container">
            <p id="heading">Providers</p>
            <div className="search-bar">
                <input type="text" placeholder="Search"/>

                <select value={categoriesOption} onChange={handleCategoryChange}>
                    <option value="">Categories</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                <select value={ratesOption} onChange={handleRatesChange}>
                    <option value="">Rates</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

            <div className="provider-container">
                <div className="provider-name">
                    <p>Muhammad Adam Ch</p>
                </div>
                <div className="provider-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="provider-skills">
                    <ul>
                        <li>English Tutor</li>
                        <li>Spanish Tutor</li>
                        <li>Calculus Tutor</li>
                        <li>Student Councelling</li>
                    </ul>
                </div>
                <button id="contact-button">Contact</button>
            </div>

            <div className="provider-container">
                <div className="provider-name">
                    <p>Muhammad Adam Ch</p>
                </div>
                <div className="provider-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="provider-skills">
                    <ul>
                        <li>English Tutor</li>
                        <li>Spanish Tutor</li>
                        <li>Calculus Tutor</li>
                        <li>Student Councelling</li>
                    </ul>
                </div>
                <button id="contact-button">Contact</button>
            </div>

            <div className="provider-container">
                <div className="provider-name">
                    <p>Muhammad Adam Ch</p>
                </div>
                <div className="provider-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="provider-skills">
                    <ul>
                        <li>English Tutor</li>
                        <li>Spanish Tutor</li>
                        <li>Calculus Tutor</li>
                        <li>Student Councelling</li>
                    </ul>
                </div>
                <button id="contact-button">Contact</button>
            </div>
        </div>
    </> );
}
 
export default ViewProvider;