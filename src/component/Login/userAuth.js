import React, { createContext, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config'
import { useState } from "react";

firebase.initializeApp(firebaseConfig);


    const AuthContext = createContext();

    export const AuthContextProvider = (props) => {
        const auth = Auth()
           return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
    }

    export const  UseAuth = () => useContext(AuthContext) 
    const getUser = user => {
        const {displayName,email,photoURL} = user
        return {name:displayName,email,photo:photoURL}
    }

    const Auth = () => {
 
        const [user, setUser] = useState(null)
         
        const signInWithGoogle = () => {

            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(res => {
                const singInUser = getUser(res.user)
                setUser(singInUser)
                return res.user
            })
            .catch(err => {
                console.log(err)
                setUser(null)
                return err.message
            })

        }

        const signOut = () => {
            firebase.auth().signOut()
            .then(function(res) {
               setUser(null)
               window.location.reload(false);
               window.location.replace("/")
               return res
              })
              .catch(function(error) {
                return error.message
              });
        }

   

        useEffect(()=>{
            firebase.auth().onAuthStateChanged(function(usr) {
                if (usr) {
                    const currUser = getUser(usr)
                  setUser(currUser)
                } else {
                  
                }
              });
        }, [])

        return {signInWithGoogle,user,signOut}

    }

    export default Auth;

