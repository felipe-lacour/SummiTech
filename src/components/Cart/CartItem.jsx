import { AmountManager } from './AmountManager'
import cross from '../../img/cross.svg'
import { RemoveItem } from './RemoveItem'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

export const CartItem = ({product}) => {
  const {basket, setBasket} = useContext(CartContext)
  return(
    <li className="flex py-6 px-2 sm:py-10 bg-white relative">
    <div className="flex-shrink-0">
      <img
        src={product.data.img}
        alt={product.data.model}
        className="h-24 w-24 rounded-md object-contain object-center sm:h-48 sm:w-48"
      />
    </div>
    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
      <div className="relative pr-9 flex flex-col sm:gap-x-6 sm:pr-0 h-full">
        <h1 className="font-bold text-2xl text-start p-2">{product.data.model}</h1>
        <h2 className="text-xl text-start p-2">{product.data.brand}</h2>
        <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center relative md:absolute md:bottom-0 md:w-full'>
          <AmountManager amount={product.data.amount} id={product.id}/>
          <div className='w-6 h-6'>
            <img src={cross} alt="Cross" />
          </div>
          <h2 className="font-bold text-red-600 text-2xl text-start md:p-2">${product.data.price}</h2>
        </div>
      </div>
    </div>
    <RemoveItem id={product.id} basket={basket} setBasket={setBasket}/>
  </li>
  )
}