import React,{useContext,useState,useEffect,createContext} from 'react'
import {auth} from '../Utils/init-firebase'
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,signOut,
    GoogleAuthProvider,
    signInWithPopup,
    FacebookAuthProvider,
    sendPasswordResetEmail } from 'firebase/auth'

const AuthContext = createContext({
    currentUser: null,
    register: ()=> Promise,
    login: ()=> Promise,
    signout: ()=> Promise,
    signInWithGoogle: ()=> Promise,
    signInWithFacebook: ()=> Promise,
    forgotPassword: ()=> Promise,
    
    
})

export const useAuth =()=> useContext(AuthContext);
const register =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const login =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const signout =()=>{
    return signOut(auth)
}
const signInWithGoogle =()=>{
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth,provider)
}
const signInWithFacebook =()=>{
    const provider = new FacebookAuthProvider()
    return signInWithPopup(auth,provider)
}
const forgotPassword =(email)=>{
    return sendPasswordResetEmail(auth,email)
}

export default function AuthContextProvider({children}) {
    const [currentUser,setCurrentUser]= useState(null);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user)=>{
        setCurrentUser(user)
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    
    const value ={
        currentUser,
        register,
        login,
        signout,
        signInWithGoogle,
        signInWithFacebook,
        forgotPassword,
        
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  }





