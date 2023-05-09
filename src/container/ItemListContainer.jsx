
import { ItemList } from "../components/ItemList"
import { useList } from "../customHooks/useList"
import productList from '../json/data.json'

export default function ItemListContainer (){
  const list = useList(productList, 2000)
  return(
    <div className="mt-6 w-full flex justify-around h-screen overflow-y-scroll mb-12 p-6">
      <ItemList list={list}/>
    </div>
  )
}