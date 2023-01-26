import React, { createContext, useEffect, useState } from "react";
import app from "../configs/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  // state to store user info and loading phase
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registering a new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login A User
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login Directly Using Google Account
  const googleLogIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Updating a user info in firebase database
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Log Out A User from web app
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // User State Checking with on auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('Observing current user', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  // Sending context value to all web page
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logIn,
    googleLogIn,
    updateUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
