import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { LogInContext } from "../../context/LogInContext";

export const SignOut = () => {
  const { empty } = useContext(CartContext)
  const {handleSignOut} = useContext(LogInContext)

  return(
    <button onClick={(e) => handleSignOut({e, empty})} className="a">Sign Out</button>
  )
}