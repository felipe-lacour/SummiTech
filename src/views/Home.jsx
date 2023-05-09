import Header from "../components/Header"
import ItemListContainer from "../container/ItemListContainer"
import { ItemList } from "../components/ItemList"
import { useList } from "../customHooks/useList"
import productList from '../json/data.json'
  

export const Home = () => {
  const list = useList(productList, 2000)
  return(<>
    <Header/>
    <ItemListContainer>
      <ItemList list={list}/>
    </ItemListContainer>
  </>)
}