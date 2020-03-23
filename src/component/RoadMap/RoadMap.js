import React from 'react';
import img from '../../images/map.png'
import deliveryImg from '../../images/delivery.png'
import './RoadMap.css'

const RoadMap = () => {
    return (
        <div className="location-area">
            <div className="map">
                <img src={img} alt=""/>
            </div>
            <div className="delivery-time">
                <img src={deliveryImg} alt=""/>
                <div className="location">
                    <ul>
                        <li><h5>Your Location</h5></li>
                        <li>107/d road</li>
                    </ul>
                    <ul>
                        <li><h5>Shop address</h5></li>
                        <li>Gulshan Plaza Restaura GRA</li>
                    </ul>
                    </div>
                    <h1 className="mb-0">09:30</h1>
                    <h5 className="mt-5">Estimate delivery time</h5>
                    <div className="customer-name">
                        <div className="customer-img">
                            <img src={deliveryImg} alt=""/>
                        </div>
                        <div>
                            <h4>Nasir</h4>
                        </div>
                    </div>
                    <button className="contact-btn">Contact</button>
                
            </div>
        </div>
    );
};

export default RoadMap;