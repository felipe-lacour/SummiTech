import { useContext } from "react"
import { LogInContext } from "../../context/LogInContext"

export const SignInButton = ({email, password, user}) => {
  const {handleSignIn} = useContext(LogInContext)

  return(
    <button onClick={(e) => handleSignIn(e, email, password, user)} className="p-2 bg-red-600 w-4/5 border-0 rounded-md my-4 mx-auto text-white font-bold">Sign In</button>
  )
}