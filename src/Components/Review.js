import React from "react";
import "./Review.css"
import Navbar from "./Navbar";
import reviewImage from '../assets/like.png'
import { FaStar } from 'react-icons/fa'
import { useState } from "react";

const Review = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return ( <>
        <Navbar/>
        <div className="review-container">
            <div className="review-container-left">
                <p>Review</p>
                {/* cols={80} rows={18} */}
                <textarea  placeholder="Give provider a review..."></textarea>
                <div className="rating-stars">
                    <p>Rating</p>
                    {[...Array(5)].map((star,index) => {
                        const currentRating = index + 1;
                        return(
                            <label>
                                <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)}/>
                                <FaStar className="star" size={25} color={ currentRating <= (hover || rating) ? "#ffc107" : "#c5c5c7"} onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}/>
                            </label>
                        )
                    })}
                    
                    
                </div>
                <button> Post </button>
            </div>
            <div className="review-container-right">
                <img src={reviewImage} alt="" />
            </div>
        </div>
    </> );
}
 
export default Review;