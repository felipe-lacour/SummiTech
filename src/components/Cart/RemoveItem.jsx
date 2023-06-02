import redCross from '../../img/redCross.svg'

export function RemoveItem ({id, basket, setBasket}) {
  function handleRemove () {
    const newBasket = basket.filter(i => i.id !== id)
    setBasket(newBasket)
  }

  return(
    <div className='p-1 border-red-600 border-2 rounded-full h-fit cursor-pointer hover:shadow-md transition-shadow absolute top-2 right-2' onClick={handleRemove}>
      <img className='w-4 md:w-6' src={redCross} alt="Red Cross" />
    </div>
  )
}