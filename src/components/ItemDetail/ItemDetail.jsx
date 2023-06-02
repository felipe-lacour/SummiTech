import { ItemQuantitySelector } from "./ItemQuantitySelector"


export const ItemDetail = ({item, itemId}) => {
  return(
    <div key={item.id} className="flex flex-col md:flex-row justify-center items-center mt-12 max-w-[90%] md:max-w-6xl mx-auto gap-12 bg-gray-100 p-2 rounded-xl border border-gray-400 shadow-2xl mb-12">
      <div className="md:w-1/3 flex justify-center">
        <img src={item.data.img} alt={item.data.model} className="max-h-[300px]"/>
      </div>
      <div className="md:w-2/3 flex flex-col gap-4 border-t-2 md:border-t-0 md:border-l-2 border-slate-600">
        <h1 className="font-bold text-xl text-start p-4">{item.data.model}</h1>
        <h2 className="text-lg text-start p-4 border-t border-slate-600">{item.data.brand}</h2>
        <h2 className="font-bold text-red-600 text-2xl text-start p-4 border-t border-slate-600">${item.data.price}</h2>
        <p className="text-lg text-justify p-4 border-t border-slate-600">{item.data.description}</p>
        <div className="flex flex-col md:flex-row justify-around p-4 gap-4 items-center">
          <ItemQuantitySelector item={item} itemId={itemId}/>
        </div>
      </div>
    </div>
  )
}
