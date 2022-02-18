import { delete_cookie } from "sfcookies";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { authentication } from "../Firebase/firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  function signUp(email, name,  password) {
   createUserWithEmailAndPassword(authentication, email, password).then(() => {
       return updateProfile(authentication.currentUser, {
           displayName: name,
       });
   })
   .then((res)=> console.log(res))
   .catch(error => console.log(error.message))
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(authentication, email, password);
  }

    function logOut (){
      delete_cookie('userToken')
        return signOut(authentication)
    }  
  useEffect(() => {
    const unsub = onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsub();
    };
  },[]);

  const forgotPassword = (email) => {
      return sendPasswordResetEmail(authentication, email);
  }

  return (
    <userAuthContext.Provider value={{ user, signUp, logIn, logOut, forgotPassword  }}>
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
