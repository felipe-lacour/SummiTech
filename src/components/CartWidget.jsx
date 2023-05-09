
export default function CartWidget ({cart, num}) {
  return(
    <div className="cart-widget">
        <img src={cart} alt="Icono Canasta" className="mochila-button"/>
      <span>{num}</span>  
    </div>
  )
}