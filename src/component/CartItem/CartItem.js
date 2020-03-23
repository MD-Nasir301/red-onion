import React, { useState, useEffect } from "react";
import "./CartItem.css";
import { getDatabaseCart } from "../../utilities/databaseManager";
import foods from "../../fakeData/foods";
import { Link } from "react-router-dom";
import Auth from "../Login/userAuth";
const CartItem = () => {
  const auth = Auth()
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const foodKey = Object.keys(saveCart);

    const cartFood = foodKey.map(key => {
      const food = foods.find(fd => fd.key === key);
      food.quantity = saveCart[key];
      return food;
    });
    setCart(cartFood);
  }, []);

  //    const [qu, setqu] = useState(0)

  //    const ha = ()=> {
  //        setqu(qu+1)
  //    }

  const preSubtotal = cart.reduce((total, fd) => total + fd.price * fd.quantity, 0);
  const subTotal = Number(preSubtotal.toFixed(2));
  const tax = Number(((subTotal * 2) / 100).toFixed(2));
  const deliveryFee = Number(((subTotal * 1) / 100).toFixed(2));
  const total = Number((subTotal + tax + deliveryFee).toFixed(2));

  return (
    <div>
      <div className="food-item-wrap">
        {cart.map(fd => (
          <div className="food-items">
            <div className="item-name">
              <div className="food-item-img">
                <img src={fd.img} alt="" />
              </div>
              <div className="name">
                <p> {fd.name} </p>
                <h2>$ {fd.price} </h2>
                <span>Delivery Free</span>
              </div>
            </div>
            <div className="quantity-add-remove">
              <button>-</button>{" "}
              <span className="quantity-amount"> {fd.quantity} </span>{" "}
              <button>+</button>
            </div>
          </div>
        ))}
      </div>
      <h1>PRICE</h1>
      <div className="price-count">
        <div className="subtotal dflex">
          <div>Subtotal {cart.length} items</div>
          <div>$ {subTotal} </div>
        </div>
        <div className="tax dflex">
          <div>Tax</div>
          <div>${tax}</div>
        </div>
        <div className="delivery dflex">
          <div>Delivery Fee</div>
          <div>$  {deliveryFee} </div>
        </div>
        <div className="total dflex">
          <div>Total </div>
          <div>$ {total} </div>
        </div>
            {
                auth.user ?
                <Link to="/roadMap" ><button style={{background:'red'}}>Place Order</button></Link>
                :
                <Link to="/login" ><button>Place Order</button></Link>
            }

       


      </div>
    </div>
  );
};

export default CartItem;
