import React, { useEffect, useState } from "react";
import Cart from "../LoginArea/LoginArea";
import logo from '../../images/logo2.png'
import './Header.css'
import LoginArea from "../LoginArea/LoginArea";
import { getDatabaseCart } from "../../utilities/databaseManager";
import Auth from "../Login/userAuth";


const Header = () => {
  const auth = Auth()
  const [count , setCount] = useState()

  useEffect(()=>{
    const saveCart = getDatabaseCart()
    const foodKey = Object.keys(saveCart)
    const cartItems = foodKey.length
    setCount(cartItems)
   
  },[])

  return (
    <div className="header-menu">
       
      <div className="logo">
         <a href="/"><img src={logo} alt=""/></a>
      </div>

      <div className="header-right">
      <div>
          {
            auth.user ?  <h4 className="user-name-img"> {auth.user.name}  <img className='user-img' src={auth.user.photo} alt=""/> </h4> : <h4> </h4>
          }
      </div>
        <LoginArea count={count}></LoginArea>
      </div>
    </div>
  );
};

export default Header;
