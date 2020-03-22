import React from "react";
import Cart from "../LoginArea/LoginArea";
import logo from '../../images/logo2.png'
import './Header.css'
import { UseAuth } from "../Login/userAuth";
import LoginArea from "../LoginArea/LoginArea";


const Header = () => {
  const auth = UseAuth()

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
        <LoginArea></LoginArea>
      </div>
    </div>
  );
};

export default Header;
