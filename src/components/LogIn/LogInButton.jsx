import { useContext } from "react"
import { LogInContext } from "../../context/LogInContext"


export const LogInButton = ({emailLog, passwordLog, user}) => {
  const {handleLogIn} = useContext(LogInContext)

  return(
    <button onClick={(e) => handleLogIn(e, emailLog, passwordLog, user)} className="p-2 bg-red-600 w-4/5 border-0 rounded-md my-4 mx-auto text-white font-bold">Log In</button>
  )
}