import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from 'react';
import './SignUp.css'
import firebaseConfig from "../../firebase.config";


const SIgnUp = () => {

    const [user, setUser] = useState({

        name: '',
        email: '',
        password: '',
        passwordtwo: '',
       
    })
    console.log(user);

    const handleBlur = (e)=> {
        const newUserInfo = {
            ...user
        }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)  
    }

    const createAccount = ()=> {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res =>{
            console.log(res.user);
        })
        .catch(function(error) {

            console.log(error.message); 

          });
    }


    return (
        <div>
            <form className="signUp" onSubmit={createAccount}>
                <input type="text" name='name' onBlur={handleBlur} placeholder="Name" required/> <br/>
                <input type="email" name="email" onBlur={handleBlur} placeholder="Email" required/> <br/>
                
                <input type="password" name="password" onBlur={handleBlur} placeholder="Password" required/> <br/>
               <input type="password" name="passwordtwo" onBlur={handleBlur}  placeholder="Confirm password" required/> <br/>
                <input className="submit" type="submit" value="Create Account" />
             
            </form>
            <a href="/login" className="goLogin">Already have an account</a>
            
        </div>
    );
};


export default SIgnUp;