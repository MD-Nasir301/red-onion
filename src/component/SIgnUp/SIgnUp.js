
import React from 'react';
import './SignUp.css'
import { UseAuth } from '../Login/userAuth';


const SIgnUp = () => {
    const user = UseAuth()
    console.log(user,"adfasdfsaf");
    return (
        <div>
            <form className="signUp" action="">
                <input type="text" placeholder="Name" required/> <br/>
                <input type="email" placeholder="Email" required/> <br/>
                <input type="password" placeholder="Password" required/> <br/>
                <input type="password" placeholder="Confirm password" required/> <br/>
                <button>Sign in</button>
             
            </form>
            <a href="/login" className="goLogin">Already have an account</a>
            
        </div>
    );
};


export default SIgnUp;