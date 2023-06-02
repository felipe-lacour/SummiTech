import { NavLink } from "react-router-dom";
import logo from '../../img/summittech-logo.svg';
import CartWidget from "../Cart/CartWidget.jsx";
import mochilarojo from '../../img/mochila-ed1c24.svg';
import { useContext, useState } from "react";
import { LogInContext } from "../../context/LogInContext";
import { SignOut } from "./SignOut";
import { NavBarResponsive } from "./NavBarResponsive";


export default function NavBar (){
  const [viewNav, setViewNav] = useState(false)

  const {loggedIn, setLoggedIn} = useContext(LogInContext)
  return(
    <nav className='navbar'>
      <NavLink to={'/'}>
        <figure className='logo-figura'>
          <img src={logo} alt="Logo Summitech" className='logo' />
          <p className="logo-nombre">
            Summi<span className='logo-nombre__span'>Tech</span>
          </p>
        </figure>
      </NavLink>
      <ul className='lista hidden md:flex'>
        <NavLink to={'/category/mountain'} className="a">Montaña</NavLink>
        <NavLink to={'/category/ski'} className="a">Esqui</NavLink>
        <NavLink to={'/category/climbing'} className="a">Escalada</NavLink>
        {loggedIn && <SignOut setLoggedIn={setLoggedIn}/>}
      </ul>
      <CartWidget cart={mochilarojo}/>
      <button 
        className="block md:hidden absolute left-1/2 -translate-x-1/2 text-red-600 cursor-pointer border-2 border-red-600 p-1 rounded-md"
        onClick={() => setViewNav((prev) => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </button>
      {viewNav && <NavBarResponsive loggedIn={loggedIn} setLoggedIn={setLoggedIn} setViewNav={setViewNav}/> }
    </nav>
  )
}
