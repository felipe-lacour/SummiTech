import { NavLink } from "react-router-dom";
import logo from '../img/summittech-logo.svg';
import CartWidget from "./CartWidget.jsx";
import mochilarojo from '../img/mochila-ed1c24.svg';

export default function NavBar (){
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
      <ul className='lista'>
        <NavLink to={'/category/mountain'}>Montaña</NavLink>
        <NavLink to={'/category/ski'}>Esqui</NavLink>
        <NavLink to={'/category/climbing'}>Escalada</NavLink>
      </ul>
      <CartWidget numero={1} cart={mochilarojo} num={1}/>
    </nav>
  )
}
