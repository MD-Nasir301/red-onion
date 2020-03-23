import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./LoginArea.css";
import { UseAuth } from "../Login/userAuth";
const LoginArea = (props) => {
  const auth = UseAuth()
  const count = props.count
  return (
    <div className="login-area">
        <span className="cart-icon">
          <FontAwesomeIcon icon={faCartPlus} /> {count}
        </span>  
      <div className="login-area">
        {
        
        auth.user ?<a href="/"><button onClick={auth.signOut} className="login-btn">Sign Out</button></a> : <a href="/login"><button className="login-btn">Login</button></a>
        }
        
        <a href="/sign-up">
          <button className="singUp-btn">Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default LoginArea;
