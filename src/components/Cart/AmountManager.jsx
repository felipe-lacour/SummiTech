import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export function AmountManager ({amount, id}) {
  const {handleLess, handleMore} = useContext(CartContext)


  return(
     <div className="flex border-slate-400 border items-center rounded-lg overflow-hidden w-fit">
      <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={() => handleLess(id)}>-</button>
      <p className="w-40">{amount}</p>
      <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={() => handleMore(id)}>+</button>
    </div>
  )
}