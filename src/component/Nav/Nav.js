import React from 'react';

//nav

const Nav = (props) => {
    const food = props.food
    const handleFoodsCategory = props.handleFoodsCategory
    return (

        <div>
             <nav>
                {
                    food.find(a => a.category === "breakfast") ? <button className="active" onClick={()=>handleFoodsCategory("breakfast")}> Breakfast</button> :
                    <button onClick={()=>handleFoodsCategory("breakfast")}> Breakfast</button>
                }

                {
                    food.find(a => a.category === "lunch") ?<button className="active" onClick={()=>handleFoodsCategory("lunch")}> Lunch</button> :
                    <button onClick={()=>handleFoodsCategory("lunch")}> Lunch</button>
                }
               {
                    food.find(a => a.category === "dinner") ?<button className="active" onClick={()=>handleFoodsCategory("dinner")}> Dinner</button> :
                    <button onClick={()=>handleFoodsCategory("dinner")}> Dinner</button>
                }      
                
            </nav> 
        </div>
    );
};

export default Nav;