export const Receipt = ({id, data, setBasket, setGoBack}) => {
  const handleGoBack = () => {
    setBasket([]);
    setGoBack(true);
  }

  return(
    <div className='bg-green-400 rounded-lg p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-2xl text-white max-h-[80vh] overflow-scroll'>
      <h1 className='text-xl font-bold my-2'>La orden con el id: {id} ha sido creada!!</h1>
      <p className='text-lg text-left font-bold my-2'>Nombre: {data.buyer.name}</p>
      <p className='text-lg text-left font-bold my-2'>Email: {data.buyer.email}</p>
      <p className='text-lg text-left font-bold my-2'>Telefono: {data.buyer.phone}</p>
     <p className='text-lg text-left font-bold my-2'>Direccion: {data.buyer.address}</p>
      <p className='text-lg text-left font-bold my-2'>Items:</p>
      <ol>
        {data.items.map((i) => {
          return(
            <li key={i.id} className='md:flex grid grid-cols-2 gap-4 my-4 relative'>
              <p><span className='font-semibold'>Modelo:</span> {i.data.model}</p>
              <p><span className='font-semibold'>Marca:</span> {i.data.brand}</p>
              <p><span className='font-semibold'>Cantidad:</span> {i.data.amount}</p>
             <p><span className='font-semibold'>Precio:</span> {i.data.price}</p>
             <hr className="absolute bottom-0 w-full"/>
            </li>
          )
       })}
      </ol>
      <p className='text-lg text-left font-bold my-2'>Total: ${data.total}</p>
      <button className='my-2 p-2 bg-white text-slate-950 rounded-md font-bold transition-all hover:shadow-md' onClick={handleGoBack}>Volver</button>
    </div>
  )
}