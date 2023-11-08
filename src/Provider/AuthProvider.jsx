import { createContext } from "react";
import {   createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";


export const AuthContext = createContext(null)
const auth = getAuth(app);

// const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const logOut =()=>{
        return signOut(auth)
    }

    // signInWithGoogle
    // const signInWithGoogle =()=>{
    //     setLoading(true)
    //     return signInWithPopup(auth,googleProvider)
    // }

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    
    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log('currentUser',currentUser)
        })
        return()=>{
           return unsubscribe()
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
       
        logOut,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;