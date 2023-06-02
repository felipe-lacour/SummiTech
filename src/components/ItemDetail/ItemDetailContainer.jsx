
import { useRouterParams } from "../../customHooks/useRouterParams"
import spinner from '../../img/spinner-3-svgrepo-com.svg'
import { ItemDetail } from "./ItemDetail"
import Header from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { useItem } from "../../customHooks/useItem"

import { useNavigate } from "react-router-dom"

export function ItemDetailContainer (){
  const itemId = useRouterParams()
  const item = useItem(itemId)
  const navigate = useNavigate()


  
  return(
    <>
      <Header/>
      <div className="h-full">
        {!item ? 
          (<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14">
            <img src={spinner} alt="spinner" className='animate-spin' />
          </div>):
          ( item === 'no hay' ? (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-xl font-black my-6">El item parece que no existe! <br/> ¿Desea seguir comprando?</h1>
              <button onClick={() => navigate('/')} className='p-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 active:bg-red-800 transition-all'>Volver al Catalogo</button>
            </div>
          ) : (
            <div>
              <ItemDetail item={item} itemId={itemId}/>
              <Footer/>
            </div>
            )
          )}
      </div>
    </>
  )
}