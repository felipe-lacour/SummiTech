import { getAuth, setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";

export const LogInButton = ({emailLog, passwordLog, setLoggedIn, user}) => {
  const handleLogIn = (e) =>{
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


  return(
    <button onClick={(e) => handleLogIn(e)} className="p-2 bg-red-600 w-4/5 border-0 rounded-md my-4 mx-auto text-white font-bold">Log In</button>
  )
}