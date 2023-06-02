import { getAuth, signOut } from "firebase/auth";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const SignOut = ({setLoggedIn}) => {
  const { setBasket } = useContext(CartContext)

  const handleSignOut = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      setBasket([])
      setLoggedIn(false)
    }).catch((error) => {
      console.log(error)
    });
  }

  return(
    <button onClick={(e) => handleSignOut(e)} className="a">Sign Out</button>
  )
}