import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className="banner-area">
                <p>Best Food Waiting For You</p>
                <form action="" className="banner-search">
                   <input type="text" placeholder="Search Food Items"/>
                <span className="search-btn">Search</span>
                </form>

            </div>
        </div>
    );
};

export default Banner;