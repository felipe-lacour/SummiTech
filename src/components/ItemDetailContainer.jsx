import productList from '../json/data.json'
import { useRouterParams } from "../customHooks/useRouterParams"
import spinner from '../img/spinner-3-svgrepo-com.svg'
import { useState, useEffect } from "react"

export const ItemDetailContainer = () => {
  const [list, setList] = useState([])
  if(!list.length){
    setList(productList)
  }
  const itemId = useRouterParams()
  const item = list.filter(i => i.id === itemId)
  const [amount, setAmount] = useState(1)
  const [basket, setBasket] = useState([]);

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
      const itemObj = item.find(i => i.id === itemId)
      itemObj.amount = amount
      setBasket([...basket, itemObj])
    } else {
      const updatedBasket = basket.map(i => {
        if(i.id === itemId){
          if(!i.amount){
            return ({...i, amount: amount}) 
          } else {
            return({...i, amount: i.amount + amount})
          }
        }
        return i
      })
      setBasket(updatedBasket)
    }
  }
  useEffect(() => {
    setTimeout(() => {
      console.log(basket);
      console.log(basket[0]?.amount);
    }, 0);
  }, [basket]);

  return(
    <div className="h-full">
      {!item.length ? 
        (<div className="absolute top-1/2 left-1/2 h-14 w-14">
          <img src={spinner} alt="spinner" className='animate-spin' />
        </div>):
        (item.map(i => {
          return(
            <div key={i.id} className="flex flex-col md:flex-row justify-center items-center mt-12 max-w-[90%] md:max-w-6xl mx-auto gap-12 bg-gray-100 p-2 rounded-xl border border-gray-400 shadow-2xl mb-12">
              <div className="md:w-1/3 flex justify-center">
                <img src={i.img} alt={i.model} className="max-h-[300px]"/>
              </div>
              <div className="md:w-2/3 flex flex-col gap-4 border-t-2 md:border-t-0 md:border-l-2 border-slate-600">
                <h1 className="font-bold text-xl text-start p-4">{i.model}</h1>
                <h2 className="text-lg text-start p-4 border-t border-slate-600">{i.brand}</h2>
                <h2 className="font-bold text-red-600 text-2xl text-start p-4 border-t border-slate-600">${i.price}</h2>
                <p className="text-lg text-justify p-4 border-t border-slate-600">{i.description}</p>
                <div className="flex flex-col md:flex-row justify-around p-4 gap-4 items-center">
                  <div className="flex border-slate-400 border items-center rounded-lg overflow-hidden w-fit">
                    <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleDecrease}>-</button>
                    <p className="w-40">{amount}</p>
                    <button className="p-2 bg-red-600 font-bold text-gray-100 hover:opacity-80 active:opacity-60" onClick={handleIncrease}>+</button>
                  </div>
                  <button className="bg-red-600 w-48 text-gray-100 font-bold rounded-lg  hover:opacity-80 active:opacity-60 h-10" onClick={handleBasket}>Agregar</button>
                </div>
              </div>
            </div>
          )
        }
      ))}
    </div>
  )
}