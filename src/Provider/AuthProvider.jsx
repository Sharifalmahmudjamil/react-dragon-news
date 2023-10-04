/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext= createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    

      
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    // signOut
    const logout= ()=>{
        setLoading(true);
        return signOut(auth)
    }

           // onAuthStateChanged
           useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                  console.log("user in the state change",currentUser);
                  setUser(currentUser)
                  setLoading(false);
              });
              return ()=>{
                  unSubscribe();
                 
              }
          },[])


    const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logout
        
    
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;