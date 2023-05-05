import { NavLink } from "react-router-dom";

export default function NavBar (){
  return(
    <nav className='navbar'>
      <ul className='lista'>
        <NavLink to={'/category/mountain'}>Montaña</NavLink>
        <NavLink to={'/category/ski'}>Esqui</NavLink>
        <NavLink to={'/category/climbing'}>Escalada</NavLink>
      </ul>
    </nav>
  )
}
