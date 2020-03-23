import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import foods from '../../fakeData/foods';
import './FoodDetails.css'
import { addToDatabaseCart } from '../../utilities/databaseManager';

const FoodDetails = (props) => {

    const [cart,setCart] = useState([])
    console.log("ray", cart);

    const {foodKey} = useParams()

    const foodItem = foods.find(fd => fd.key === foodKey)

    const {name,details,price,img} = foodItem
    const [quantity, setQuantity] = useState(1)

    const foodCategory = foods.find(fd => fd.category === foodItem.category)
    const category  = foodCategory.category
    const othersFood = foods.filter(food => food.category === category)

    

    const handleAddQuantity = ()=> {
        setQuantity(quantity+1)
    }
    const handleRemoveQuantity = ()=> {
        if(quantity === 0){
            return 0
        }
        setQuantity(quantity-1)
    }

    const handleAddToCart = () => {
        foodItem.quantity = quantity
        const newCart = [...cart,foodItem]  
        setCart(newCart)
        addToDatabaseCart(foodItem.key,foodItem.quantity)
       
    }
 


    return (
        <div className="food-details-area">
            <div className="food-details">
                <h3>  {name}  </h3>
                <p>  {details}  </p>
                <span> ${price} </span>
                <span className="add-items-btn">
                    <button onClick={handleRemoveQuantity}>-</button>
                    <span>{quantity}</span> 
                    <button onClick={handleAddQuantity}>+</button> 
                </span><br/>
                <button className="addToCart" onClick={handleAddToCart}> <FontAwesomeIcon icon={faCartPlus} />Add</button>
                <h2 className="others-items-title">Others {category} items : </h2>
                <div className="others-food">
                    {
                        othersFood.map(img =>  <img className="w50" src={img.img} alt=""/> )
                    }
                </div>
            </div>
            <div className="food-img">
                <img src={img} alt=""/>
            </div>
        </div>
    );
};

export default FoodDetails;