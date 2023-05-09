import Header from "../components/Header"
import { ItemDetailContainer } from "../components/ItemDetailContainer"

export const Detail = ({list}) => {
  return(
    <>
      <Header/>
      <ItemDetailContainer list={list}/>
    </>
  )
}