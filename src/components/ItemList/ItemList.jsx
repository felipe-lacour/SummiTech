import spinner from '../../img/spinner-3-svgrepo-com.svg'
import { Item } from './Item'

export const ItemList = ({list}) => {
  return(
    <>
      {!list.length ?
        (
          <div className="absolute top-1/2 left-1/2 h-14 w-14">
            <img src={spinner} alt="spinner" className='animate-spin' />
          </div>
        )
          :
        (
          <div className="mt-6 w-full flex justify-around h-screen overflow-y-scroll mb-12 p-6">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-8 p-6 mx-auto h-fit">
              {list.map(product => <Item product={product} key={product.id}/>)}
            </div>
          </div>
        )
      }
    </>
  )
}