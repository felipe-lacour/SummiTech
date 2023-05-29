import { Link } from 'react-router-dom'

export const Item = ({product}) => {

  return(
    <Link to={'/item/' + product.id}>
      <div className="container bg-gray-100 min-w-[300px] min-h-[300px] rounded-lg flex justify-end flex-col p-2 gap-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-all items-center">
        <img src={product.data.img} alt={product.data.model} className="h-36"/>
        <h3 className="text-lg font-bold">{product.data.model}</h3>
        <div className="flex justify-around w-full">
          <h4 className="font-bold text-center text-red-600">${product.data.price}</h4>
          <h4 className="font-bold text-center">{product.data.brand}</h4>
        </div>
        <button className="bg-red-600 w-2/3 p-1 rounded-md text-gray-100 font-bold hover:opacity-80 hover:shadow-md active:opacity-80 transition-all">Ver Mas</button>
      </div>
    </Link>
  )
}