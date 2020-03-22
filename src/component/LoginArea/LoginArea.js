import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./LoginArea.css";
const LoginArea = () => {
  return (
    <div className="login-area">
        <span className="cart-icon">
          <FontAwesomeIcon icon={faCartPlus} />0
        </span>  
      <div className="login-area">
        <a href="/login"><button className="login-btn">Login</button></a>
        <a href="/sign-up">
          <button className="singUp-btn">Sign up</button>
        </a>
      </div>
    </div>
  );
};

export default LoginArea;
