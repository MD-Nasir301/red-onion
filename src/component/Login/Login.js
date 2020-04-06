import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
import "./Login.css";
import Auth from "./userAuth";
import firebaseConfig from "../../firebase.config";

const Login = () => {

    const auth = Auth()

    const [user, setUser] = useState ({

      name: '',
      email: '',
      password: '',
      passwordtwo: '',
     
  })

  const handleBlur = (e)=> {
    const newUserInfo = {
        ...user
    }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)  
}
    const loginWithEmail = ()=> {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {

      })
      .catch(function(error) {
        console.log(error.message)
      });
    }
  return (
    <div>
      <p class="notice">NOTICE : Only (Login with google) working.</p>
      <form className="login" onSubmit={loginWithEmail}>
        <input onBlur={handleBlur} type="email" placeholder="Email" required /> <br />
        <input onBlur={handleBlur} type="password" placeholder="Password" required /> <br />

      {
        user.email ? <input className="login-btn" type="submit" value="Log"/> :<input className="login-btn" type="submit" value="Log in"/>
      }
        
      </form>

      <div className="login-with-google">
        <h4>Login with Google Account</h4>
        {
            auth.user  ? 
            <button onClick={auth.signOut} >Sign Out</button>
            :
            <button onClick={auth.signInWithGoogle} >Login With Google</button>
        }

        
      </div>
    </div>
  );
};

export default Login;
