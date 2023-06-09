import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import { CartItem } from './CartItem'
import { useState } from 'react'
import { Checkout } from './Checkout'
import { Footer } from '../Footer/Footer'
import { LogInContext } from "../../context/LogInContext"
import {LogIn} from '../LogIn/LogIn'

export default function Cart() {
  const {basket} = useContext(CartContext)
  let total = 0
  basket.forEach(i => total = total + (i.data.amount * i.data.price))
  const [visualizedCheckout, setVisualizedCheckout] = useState(false)
  const {loggedIn} = useContext(LogInContext)

  const handleCheckout = () => {
    setVisualizedCheckout(prev => !prev)
  }

  if(!loggedIn){
    return <LogIn />
  }

  return (
    <div>
      <Header/>
      {!basket.length ? (
        <div className='realtive'>
          <div className="mx-auto max-w-2xl lg:max-w-7xl w-fit py-6 px-6 max-h-screen bg-gray-100 rounded-lg my-12">
            <h2 className='font-bold text-2xl my-4'>Oops! Parece que no tienes items en tu carrito</h2>
            <h4 className='my-4 text-lg'>¿Deseas seguir comprando?</h4>
            <Link to={'/'}><button className='bg-red-600 text-gray-100 p-2 rounded-md my-4 transition-all hover:opacity-80 active:opacity-60 font-bold'>Volver al catalogo</button></Link>
          </div>
          <div className='absolute bottom-0 w-full'>
            <Footer/>
          </div>
        </div>
      ) : (
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8 min-h-screen">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Carrito</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7 max-h-[600px] overflow-y-scroll rounded-lg">
            <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {basket.map((product) => (<CartItem product={product}  key={product.id}/>))}
            </ul>
          </section>
          <section
            aria-labelledby="summary-heading"
            className="my-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Resumen de Orden
            </h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base font-bold text-gray-900">${total.toFixed(2)}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <button
                className="w-full rounded-md border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </section>
        </div>
      </div>
      )}
      {visualizedCheckout && <Checkout handleCheckout={handleCheckout} total={total.toFixed(2)} basket={basket}/>}
      {basket.length !== 0 && <Footer/>}
    </div>
  )
}
