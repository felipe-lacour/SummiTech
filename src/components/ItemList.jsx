import { useRouterParams } from '../customHooks/useRouterParams'
import spinner from '../img/spinner-3-svgrepo-com.svg'
import { Link } from 'react-router-dom'


const item = (list) => {
  function handleAdd (e, product) {
    e.preventDefault()
    console.log(product)
  }

  return(
    list.map(product => (
      <Link to={'/category/' + product.category + "/" + product.id}  key={product.id} onClick={e => e.stopPropagation()}>
        <div className="border-2 container bg-gray-100 min-w-[300px] min-h-[300px] rounded-lg flex justify-end flex-col p-2 gap-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-all items-center">
          <img src={product.img} alt={product.model} className="h-36"/>
          <h3 className="text-lg font-bold">{product.model}</h3>
          <div className="flex justify-around w-full">
            <h4 className="font-bold text-center text-red-600">${product.price}</h4>
            <h4 className="font-bold text-center">{product.brand}</h4>
          </div>
          <button className="bg-red-600 w-2/3 p-1 rounded-md text-gray-100 font-bold hover:opacity-80 hover:shadow-md active:opacity-80 transition-all" onClick={e => handleAdd(e, product)}>Agregar</button>
        </div>
      </Link>
    ))
  )
}
const listFilter = ({list, categoryId}) => {
  let filteredList;
  if(!categoryId){
    return item(list)
  } else {
    filteredList = list.filter(i => i.category === categoryId)
    return item(filteredList)
  }
}
export const ItemList = ({list}) => {
  const categoryId = useRouterParams()
  return(
    <>
      {!list.length ?
        (
          <div className="absolute top-1/2 left-1/2 h-14 w-14">
            <img src={spinner} alt="spinner" className='animate-spin' />
          </div>
        )
          :
          (listFilter({list, categoryId}))
      }
    </>
  )
}