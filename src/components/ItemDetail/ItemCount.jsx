import { useContext } from "react"
import { useState } from "react"
import {CartContext} from '../../context/CartContext'


export function ItemCount ({ item, itemId}) {
  const {basket, setBasket} = useContext(CartContext)
  const [amount, setAmount] = useState(1)
  function handleIncrease() {
    setAmount(n => n + 1)
  }

  function handleDecrease() {
    if(amount > 1){
      setAmount(n => n - 1)
    }
  }

  function handleBasket() {
    const found = basket.find(i => i.id === itemId)
    if(!found){
      const itemObj = { ...item, data:{...item.data, amount: amount }};
      setBasket([...basket, itemObj])
    } else {
      const updatedBasket = basket.map(i => {
        if(i.id === itemId){
          if (i.data && i.data.amount) {
            return { ...i, data: { ...i.data, amount: i.data.amount + amount } }
          } else {
            return { ...i, data: { ...i.data, amount: amount } }
          }
        }
        return i
      })

      setBasket(updatedBasket)
    }
  }
  // useEffect(() => {
  //   const basketItem = basket.find(i => i.id === item.id)
  //   const indexBasket = basket.indexOf(basketItem)
  //   setTimeout(() => {
  //     console.log(basket);
  //     console.log(basket[indexBasket]?.data.amount);
  //   }, 0);
  // }, [basket, item]);

  return(
    <>
      <div className="flex border-slate-400 border items-center rounded-lg overflow-hidden w-fit">
        <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleDecrease}>-</button>
        <p className="w-40">{amount}</p>
        <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleIncrease}>+</button>
      </div>
      <button className="bg-red-600 w-48 text-gray-100 font-bold rounded-lg  hover:opacity-80 active:opacity-60 h-10" onClick={handleBasket}>Agregar</button>
    </>
  )
}