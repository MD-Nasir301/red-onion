import React, { useState } from 'react';
import './CheckoutForm.css'
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState()
  const [paymentSuccess, setPaymentSuccess] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
      setPaymentError(error.message)
      setPaymentSuccess('')
    }
    else{
      setPaymentSuccess(paymentMethod)
      setPaymentError('')
    }
  };

  return (
    <form className="style" onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>

      {
        paymentError && <p className="error"> {paymentError} </p>
      }
      
      {
        paymentSuccess && <p> Payment Successful </p>
      }

    </form>
  );
};
export default CheckoutForm;