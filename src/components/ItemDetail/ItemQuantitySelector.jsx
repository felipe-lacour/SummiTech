import { useContext } from "react"
import { useState } from "react"
import {CartContext} from '../../context/CartContext'
import { AddItemButton } from "./AddItemButton"


export function ItemQuantitySelector ({ item, itemId}) {
  const {handleBasket} = useContext(CartContext)
  const [amount, setAmount] = useState(1)
  function handleIncrease() {
    setAmount(n => n + 1)
  }

  function handleDecrease() {
    if(amount > 1){
      setAmount(n => n - 1)
    }
  }

  return(
    <>
      <div className="flex border-slate-400 border items-center rounded-lg overflow-hidden w-fit">
        <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleDecrease}>-</button>
        <p className="w-40">{amount}</p>
        <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleIncrease}>+</button>
      </div>
      <AddItemButton onClick={() => handleBasket(item, itemId, amount)}/>
    </>
  )
}