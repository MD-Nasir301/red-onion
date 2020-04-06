import React from 'react';
import foods from '../../fakeData/foods'
const Inventory = () => {
    
    const  handleAddInventory = ()=>{
        const product = foods
        console.log("before save",product.length);
        
        fetch('http://localhost:3200/addProduct',{
            method: "post",
            body:JSON.stringify(product),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => console.log('after save data', data) )
    }
    
    return (
        <div>
            <h1>This is inventory</h1>
            <button onClick={handleAddInventory}>add Inventory</button>
        </div>
    );
};

export default Inventory;