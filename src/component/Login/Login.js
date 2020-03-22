import React from "react";
import "./Login.css";
import Auth from "./userAuth";



const Login = () => {

    const auth = Auth()

  return (
    <div>
      <form className="login" action="">
        <input type="email" placeholder="Email" required /> <br />
        <input type="password" placeholder="Password" required /> <br />
        <button>Log in</button>
      </form>

      <div className="login-with-google">
        <h4>Login with Google Account</h4>
        {
            auth.user ? 
            <button onClick={auth.signOut} >Sign Out</button>
            :
            <button onClick={auth.signInWithGoogle} >Login With Google</button>
        }

        
      </div>
    </div>
  );
};

export default Login;
