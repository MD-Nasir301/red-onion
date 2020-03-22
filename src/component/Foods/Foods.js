import React, { useState } from 'react';
import './Foods.css'
import Food from '../Food/Food';
import foods from '../../fakeData/foods';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';


const Foods = () => {
    const allFood = foods;
    const lunch = allFood.filter(fd => fd.category === "lunch")
    
    const [food, setFood] = useState(lunch)

    
    const handleFoodsCategory = (category) => {
        const displayFood = allFood.filter(fd => fd.category === category)
        setFood(displayFood)
    }
    

    return (
        <div className="foods-area">
            <Nav handleFoodsCategory ={handleFoodsCategory} food={food}></Nav>


            {
                food.map(fd => <Food food={fd}></Food>)
            }

        <div className="checkout-btn">
          <Link to="/checkout"> <button>Checkout Your Food</button></Link>
        </div>

        </div>
    );
};

export default Foods;