import React, { createContext,  useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup ,GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  

  const createUser =(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = ()=>{
    return signOut (auth);
  }
  const googleLogin =()=>{
    return signInWithPopup(auth, googleAuthProvider);
  }
 
  
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log('auth state change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () =>{
      unsubscribe()
    }
  },[])


  const authInfo = {
    user, 
    createUser,
    login,
    logOut,
    loading,
    googleLogin,
    
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;