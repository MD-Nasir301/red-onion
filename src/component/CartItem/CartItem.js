import React, { useState } from 'react';
import './CartItem.css'
const CartItem = () => {

    const [quantity,setQuantity] = useState(1)

    const handleQuantityAdd = ()=> {
         setQuantity(quantity+1)
    }
    const handleQuantityDecrease = ()=> {
        if(quantity === 1){
            return 1
        }
        setQuantity(quantity-1)
    }

    return (
        <div>
        <div className="food-items">
           <div className="item-name">
               <div className="food-item-img">
                    <span>Image</span>
               </div>
               <div className="name">
                   <p>Butter Naan</p>
                   <h2>$ 40</h2>
                   <span>Delivery Free</span>
               </div>
           </div>
           <div className="quantity-add-remove">
                <button onClick={handleQuantityDecrease} >-</button><span className="quantity-amount"> {quantity} </span><button onClick={handleQuantityAdd}>+</button>
           </div>
        </div>

        </div>
    );
};

export default CartItem;