import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import redCross from '../../img/redCross.svg'

export function RemoveItem ({id}) {
  const {handleRemove} = useContext(CartContext)

  return(
    <div className='p-1 border-red-600 border-2 rounded-full h-fit cursor-pointer hover:shadow-md transition-shadow absolute top-2 right-2' onClick={() => handleRemove(id)}>
      <img className='w-4 md:w-6' src={redCross} alt="Red Cross" />
    </div>
  )
}