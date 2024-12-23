import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/Firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const UserSignup = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const userSignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userSignOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const userInfo = {
        user,
        setUser,
        loading,
        UserSignup,
        userSignIn,
        userSignOut,

    }

    //set observer on the Auth object to get the current user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        };
    }, []);


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;