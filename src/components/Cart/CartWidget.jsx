import { Link } from "react-router-dom";
import { CartWidgetCounter } from "./CartWidgetCounter";


export default function CartWidget ({cart}) {
  return(
    <Link to={"/cart"} className="cart-widget">
      <div>
        <img src={cart} alt="Icono Canasta" className="mochila-button"/>
        <CartWidgetCounter/>
      </div>
    </Link>
  )
}