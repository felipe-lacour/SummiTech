import redCross from '../../img/redCross.svg'


export const Checkout = ({handleCheckout}) => {
  return (
    <>
      <div className="before:contents-[] before:w-screen before:h-screen before:bg-slate-950/70 before:absolute before:top-0 before:left-0"></div>
      <div className='max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -transalte-y-1/2 w-4/5'>
         <div className='p-1 border-red-600 border-2 rounded-full h-fit cursor-pointer hover:shadow-md transition-shadow absolute top-4 right-4' onClick={() => handleCheckout()}>
          <img className='w-6' src={redCross} alt="Red Cross" />
         </div>
        <h2 className="font-bold text-xl">Checkout</h2>
        <div className="flex gap-4 my-6">
          <div className="w-1/2">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="you@example.com"/>
            </div>
          </div>
          <div className="w-1/2">
            <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">Nombre Completo</label>
            <div className="mt-2">
              <input type="text" name="nombre" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nombre Completo"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

