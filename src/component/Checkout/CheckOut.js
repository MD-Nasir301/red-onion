import React from 'react';
import './CheckOut.css'
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Auth from '../Login/userAuth';
const CheckOut = () => {
    const auth = Auth()
    return (
        <div className="check-out-page">
            
            <div>
                <h3 className="underline">Edit Delivery Details</h3>
                <form className="delivery-form signUp" action="">
                    {
                        auth.user ? <input type="text" value={auth.user.name} placeholder="Name"/> :<input type="text" placeholder="Name"/> 
                    }
                    
                    <input type="email" placeholder="Road No."/>
                    <input type="text" placeholder="flat,suite or floor"/>
                    <input type="text" placeholder="Business Name "/>
                    <textarea type="text" placeholder="Add delivery instructor"/>
                    <button type="submit" > Save & Continue </button>
                </form>
            </div>
            <div className="cart">
                <div className="cart-top">
                <h5><span>From</span>Gulshan Plaza Restaura GPR</h5>
               <p>Arriving in 20-30 min</p>
               <p>107 Rd No 8</p>
                </div>
                <div className="cart-items">
                    <CartItem></CartItem>
                </div>

            </div>
        </div>
    );
}; 

export default CheckOut;