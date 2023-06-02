import { NavLink } from "react-router-dom";
import { SignOut } from "./SignOut";
import { useNavigate } from "react-router-dom";

export const NavBarResponsive = ({loggedIn, setLoggedIn, setViewNav}) => {
  const navigate = useNavigate()

  const handleNav = (e, place) => {
    e.preventDefault()
    setViewNav((prev) => !prev)
    navigate('/category/' + place)
  }

  return(
    <div className="bg-negro min-h-screen text-white fixed w-full top-0 left-0 flex flex-col items-center justify-center gap-8 z-40">
        <button 
          className="absolute top-8 right-8"
          onClick={() => setViewNav((prev) => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        <NavLink onClick={(e) => handleNav(e, 'mountain')} className="font-bold a text-2xl">Montaña</NavLink>
        <NavLink onClick={(e) => handleNav(e, 'ski')} className="font-bold a text-2xl">Esqui</NavLink>
        <NavLink onClick={(e) => handleNav(e, 'climbing')} className="font-bold a text-2xl">Escalada</NavLink>
        {loggedIn && <SignOut setLoggedIn={setLoggedIn}/>}
    </div>
  )
}