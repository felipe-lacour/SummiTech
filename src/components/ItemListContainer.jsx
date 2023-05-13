import Header from "./Header";
import { useList } from "../customHooks/useList"
import productList from '../json/data.json'
import { ItemList } from './ItemList'
import { useRouterParams } from "../customHooks/useRouterParams";

export function ItemListContainer (){
  let list = useList(productList, 2000)
  const categoryId = useRouterParams()
  let filteredList;
  if (categoryId) {
    filteredList = list.filter(i => i.category === categoryId)
    list = (filteredList)
  }

  return(
    <>
      <Header/>
      <ItemList list={list}/>
    </>
  )
}