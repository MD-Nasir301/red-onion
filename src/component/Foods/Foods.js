import React, { useState } from "react";
import "./Foods.css";
import Food from "../Food/Food";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Auth from "../Login/userAuth";
import { useEffect } from "react";

const Foods = () => {
  const auth = Auth();

  const [allFood, setAllFood] = useState([]);
  useEffect(() => {
    fetch("https://red-onion-app.herokuapp.com/foods")
      .then((res) => res.json())
      .then((data) => {
        setAllFood(data);
        console.log("data", data);
      });
  }, []);

  const lunch = allFood.filter((fd) => fd.category === "lunch");
  console.log("lunch", lunch);

  const [food, setFood] = useState(lunch);
  console.log("food", food);

  const handleFoodsCategory = (category) => {
    const displayFood = allFood.filter((fd) => fd.category === category);
    setFood(displayFood);
  };

  return (
    <div className="foods-area">
      <Nav handleFoodsCategory={handleFoodsCategory} food={food}></Nav>

      {
        food.map((fd) => ( <Food food={fd}></Food>))
      }

      <div className="checkout-btn">
        {auth.user ? (
          <Link to="/checkout">
            {" "}
            <button className="active-btn">Checkout Your Food</button>
          </Link>
        ) : (
          <Link to="/checkout">
            {" "}
            <button>
              Checkout Your Food
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Foods;
