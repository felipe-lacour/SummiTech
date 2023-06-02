import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export function AmountManager ({amount, id}) {
  const {basket, setBasket} = useContext(CartContext)
  function handleLess () {
    const newBasket = basket.map(i => {
      if(i.id === id){
        if(i.data.amount === 1){
          return null
        } else if (i.data.amount > 0){
          return {...i, data:{...i.data, amount: i.data.amount - 1 }}
        }
      }
      return i
    }).filter(Boolean)
    setBasket(newBasket)
  }
  function handleMore () {
    const newBasket = basket.map(i => {
      if(i.id === id){
        return {...i, data:{...i.data, amount: i.data.amount + 1 }}
      } else {
        return i
      }
    })
    setBasket(newBasket)
  }
  return(
     <div className="flex border-slate-400 border items-center rounded-lg overflow-hidden w-fit">
      <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleLess}>-</button>
      <p className="w-40">{amount}</p>
      <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleMore}>+</button>
    </div>
  )
}