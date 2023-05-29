import {CartContext} from '../../context/CartContext'
import { useContext } from "react"

export const CartWidgetCounter = () => {
  const {basket} = useContext(CartContext)
  let amount = 0;
  basket.forEach(i => {
    amount = amount + i.data.amount
  });
  return (
    <>
      {basket.length > 0 && <span className="bg-red-600 px-2 text-white font-bold rounded-full absolute -top-1/3 -right-1/3">{amount}</span>}
    </>
  )
}