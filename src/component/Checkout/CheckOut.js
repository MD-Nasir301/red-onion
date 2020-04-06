import React from 'react';
import './CheckOut.css'
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import  { UseAuth } from '../Login/userAuth';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {
    getDatabaseCart,
    processOrder
  } from "../../utilities/databaseManager";
import { useState } from 'react';

const CheckOut = () => {
    const auth = UseAuth()
    const stripePromise = loadStripe('pk_test_sMbPXhXqw3gfPsXu1KLvUZXr00AchgIHNQ');
    const [shipInfo, setShipInfo] = useState()
    const [orderId, setOrderId] = useState()
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setShipInfo(data)
      };

    const handlePlaceOrder = (payment)=>{
        // TODO:
        const saveCart = getDatabaseCart();
        const orderDetails = {
          email: auth.user.email,
          cart: saveCart,
          shipment: shipInfo,
          payment: payment
        };
        fetch("http://localhost:3200/placeOrder", {
          method: "post",
          body: JSON.stringify(orderDetails),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(res => res.json())
          .then(order => {
            setOrderId(order._id)
            processOrder()
          });
    }


    return (
        <div className="check-out-page">
        <div className="form-area">
           <h3 className="underline">Edit Delivery Details</h3>
                <form style={{display: shipInfo && 'none'}} className="ship-form delivery-form" onSubmit={handleSubmit(onSubmit)}>
                {
                    auth.user ?  <input
                    name="name"
                    defaultValue={auth.user.name}
                    ref={register({ required: true })}
                    placeholder="Your Name"
                    />:<input
                    name="name"
                    ref={register({ required: true })}
                    placeholder="Your Name"
                    />
                }
                    {errors.name && <span className="error">Name is required</span>}

                {
                    auth.user ?  <input
                    name="email"
                    defaultValue={auth.user.email}
                    ref={register({ required: true })}
                    placeholder="Your Email"
                    />:<input
                    name="email"
                    ref={register({ required: true })}
                    placeholder="Your Email"
                    />
                }
                    {errors.email && <span className="error">Email is required</span>}

                    <input
                    name="AddressLine1"
                    ref={register({ required: true })}
                    placeholder="Address Line 1"
                    />
                    {errors.AddressLine1 && (
                    <span className="error">Address is required</span>
                    )}
                    <input
                    name="city"
                    ref={register({ required: true })}
                    placeholder="City"
                    />
                    {errors.city && <span className="error">City is required</span>}
                    <input
                    name="country"
                    ref={register({ required: true })}
                    placeholder="Country"
                    />
                    {errors.country && (
                    <span className="error">Country is required</span>
                    )}
                    {
                        auth.user ? <button className="submit" type="submit"> Submit</button > : 
                        
                        <a className="submit" href="/login">Please Login to Continue</a> 
                    }
                
                </form>
            <div style={{display : shipInfo ? 'block':'none'}}>
                <h3>Payment Information</h3>
                <Elements stripe={stripePromise}>
                    <CheckoutForm handlePlaceOrder={handlePlaceOrder}></CheckoutForm>
                </Elements>
                {
                    orderId && <div style={{color:'#673AB7',marginTop:'50px'}}>
                        <h1>Thank You For Your Order</h1>
                        <h4>Your Order Id Is : {orderId}</h4>
                    </div>
                }
            </div>      
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