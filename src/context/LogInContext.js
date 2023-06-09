import { createContext } from "react"
import { useState } from "react";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";


const LogInContext = createContext()

const LogInContextProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(null);

  const setUser = (user) => {
    return setLoggedIn(user);
  }

  const handleLogIn = (e, emailLog, passwordLog, user) =>{
    e.preventDefault()
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(()=>{
        return signInWithEmailAndPassword(auth, emailLog, passwordLog)
          .then(() => {
            setLoggedIn(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });
      })
  }

  const handleSignIn = (e, email, password, user) => {
    e.preventDefault()
    const auth = getAuth()
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            setLoggedIn(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
          });
      })
  }

  const handleSignOut = ({e, empty}) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      empty()
      setLoggedIn(false)
    }).catch((error) => {
      console.log(error)
    });
  }

  const contextValue = {
    loggedIn,
    setUser,
    handleLogIn,
    handleSignIn,
    handleSignOut
  }

  return(
    <LogInContext.Provider value={contextValue}>
      {children}
    </LogInContext.Provider>
  )
}

export {LogInContext, LogInContextProvider}