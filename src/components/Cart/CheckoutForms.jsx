import redCross from '../../img/redCross.svg'
import { useState } from 'react'
import { getFirestore, collection, addDoc, doc, getDoc} from 'firebase/firestore'
import { useContext } from 'react'
import { LogInContext } from '../../context/LogInContext'

export const CheckoutForms = ({handleCheckout, setId, basket, total, setData}) => {
  const [nombre, setNombre] = useState('')
  const [setMail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const {loggedIn} = useContext(LogInContext)

  const sendOrder = () => {
    const cart = basket.map(i => i)
    const order ={
      buyer: {
        name: nombre,
        phone: mobile,
        email: loggedIn.email,
        address: address
      },
      items: cart,
      total: total
    }

    const db = getFirestore()
    const orderCollection = collection(db, 'orders')

    addDoc(orderCollection, order)
      .then(({ id }) => {
        const refDoc = doc(db, 'orders', id)
        getDoc(refDoc).then(snapshot => {
          setId(snapshot.id)
          setData(snapshot.data())
        })
      })
  }

  return(
    <div className='max-w-2xl bg-gray-50 p-6 rounded-lg absolute top-1/3 left-1/2 -translate-x-1/2 -transalte-y-1/2 w-4/5'>
    <div className='p-1 border-red-600 border-2 rounded-full h-fit cursor-pointer hover:shadow-md transition-shadow absolute top-4 right-4' onClick={() => handleCheckout()}>
      <img className='w-6' src={redCross} alt="Red Cross" />
    </div>
    <h2 className="font-bold text-xl">Checkout</h2>
    <div className="flex flex-col gap-4 my-6">
      <div className='flex gap-4'>
        <div className="w-1/2">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" placeholder="you@example.com" onChange={() => setMail(loggedIn.email)} value={loggedIn.email}/>
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">Nombre Completo</label>
          <div className="mt-2">
            <input type="text" name="nombre" id="nombre" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" placeholder="Nombre Completo" onChange={(event) => setNombre(event.target.value)}/>
          </div>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className="w-1/2">
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Telefono Celular</label>
          <div className="mt-2">
            <input type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" placeholder="Telefono Celular" onChange={(event) => setMobile(event.target.value)}/>
          </div>
        </div>
        <div className="w-1/2">
          <label htmlFor="adress" className="block text-sm font-medium leading-6 text-gray-900">Direccion</label>
          <div className="mt-2">
            <input type="text" name="address" id="address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" placeholder="Ingrese su Direccion" onChange={(event) => setAddress(event.target.value)}/>
          </div>
        </div>
      </div>
    </div>
    <button onClick={sendOrder} className='bg-red-600 text-gray-50 font-bold p-2 rounded-md hover:bg-red-600 active:bg-red-400 transition-all'>
      Enviar
    </button>
  </div>
  )
}