import productList from '../json/data.json'
import { useRouterParams } from "../customHooks/useRouterParams"
import spinner from '../img/spinner-3-svgrepo-com.svg'
import { ItemDetail } from "./ItemDetail"
import Header from "./Header"
import { useList } from "../customHooks/useList"

export function ItemDetailContainer (){
  let list = useList(productList, 1000)
  const itemId = useRouterParams()
  const item = list.find(i => i.id === itemId)
  return(
    <>
      <Header/>
      <div className="h-full">
        {!item ? 
          (<div className="absolute top-1/2 left-1/2 h-14 w-14">
            <img src={spinner} alt="spinner" className='animate-spin' />
          </div>):
          (<ItemDetail item={item} itemId={itemId}/>)}
      </div>
    </>
  )
}