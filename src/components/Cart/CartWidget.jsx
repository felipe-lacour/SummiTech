import { Link } from "react-router-dom";
import { CartWidgetCounter } from "./CartWidgetCounter";


export default function CartWidget ({cart}) {
  return(
    <Link to={"/cart"} className="absolute right-4 md:right-[10vh]">
      <div>
        <img src={cart} alt="Icono Canasta" className="mochila-button "/>
        <CartWidgetCounter/>
      </div>
    </Link>
  )
}