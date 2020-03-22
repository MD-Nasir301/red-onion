import React from 'react';
import './Food.css'
import { Link } from 'react-router-dom';

const Food = (props) => {

    const {name,img,price,title,key} = props.food;  

    return (
            <div className="food-card">
                <div className="card-img">
                    <img src={img} alt=""/>
                </div>
                <div className="card-text">
                    <h4>{name}</h4>
                    <p> {title} </p>
                    <h3>$ {price} </h3>
                </div>
                <Link to={"/foodDetails/"+key}><button className="btn">Details</button></Link>
            </div>    
    );
};

export default Food;