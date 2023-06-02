import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CheckoutForms } from './CheckoutForms'
import { Receipt } from './Receipt'


export const Checkout = ({handleCheckout, total, basket, setBasket}) => {
  const [id, setId] = useState()
  const [data, setData] = useState()
  const [goBack, setGoBack] = useState(false);

  if (goBack) {
    return <Navigate to="/"/>;
  }

  return (
    <>
    <div className="before:contents-[] before:w-screen before:h-screen before:bg-slate-950/70 before:fixed before:top-0 before:left-0"></div>
    {!id ? (
      <>
        <CheckoutForms setId={setId} setData={setData} total={total} basket={basket} handleCheckout={handleCheckout}/>
      </>
    ) : (
      <>
        <Receipt id={id} data={data} setBasket={setBasket} setGoBack={setGoBack}/>
      </>
    )}
    </>
  )
}

