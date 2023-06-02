import { getAuth, setPersistence, createUserWithEmailAndPassword, browserLocalPersistence } from "firebase/auth";

export const SignInButton = ({email, password, user, setLoggedIn}) => {
  const handleSignIn = (e) => {
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

  return(
    <button onClick={(e) => handleSignIn(e)} className="p-2 bg-red-600 w-4/5 border-0 rounded-md my-4 mx-auto text-white font-bold">Sign In</button>
  )
}