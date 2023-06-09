import Header from "../Header/Header";
import { useList } from "../../customHooks/useList"
import { ItemList } from './ItemList'
import { useRouterParams } from "../../customHooks/useRouterParams";
import { LogInContext } from "../../context/LogInContext"
import {LogIn} from '../LogIn/LogIn'
import { useContext } from 'react'


export function ItemListContainer (){
  const {loggedIn} = useContext(LogInContext)
  let list = useList()
  const categoryId = useRouterParams()
  let filteredList;
  if (categoryId) {
    filteredList = list.filter(i => i.data.category === categoryId)
    list = (filteredList)
  }
  if(!loggedIn){
    return <LogIn />
  }
  return(
    <>
      <Header/>
      <ItemList list={list}/>
    </>
  )
}