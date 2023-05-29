import Header from "../Header/Header";
import { useList } from "../../customHooks/useList"
import { ItemList } from './ItemList'
import { useRouterParams } from "../../customHooks/useRouterParams";

export function ItemListContainer (){
  let list = useList()
  const categoryId = useRouterParams()
  let filteredList;
  if (categoryId) {
    filteredList = list.filter(i => i.data.category === categoryId)
    list = (filteredList)
  }
  return(
    <>
      <Header/>
      <ItemList list={list}/>
    </>
  )
}