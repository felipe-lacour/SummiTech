import NavBar from "./NavBar";
import logo from '../img/summittech-logo.svg'
import CartWidget from "./CartWidget.jsx";
import mochilarojo from '../img/mochila-ed1c24.svg';
import { NavLink } from "react-router-dom";

export default function Header (){
  return(
    <header>
      <NavLink to={'/'}>
        <figure className='logo-figura'>
          <img src={logo} alt="Logo Summitech" className='logo' />
          <p className="logo-nombre">
            Summi<span className='logo-nombre__span'>Tech</span>
          </p>
        </figure>
      </NavLink>
      <NavBar/>
      <CartWidget numero={1} cart={mochilarojo} num={1}/>
    </header>
  )
}