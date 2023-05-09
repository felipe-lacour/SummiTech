export default function ItemListContainer ({children}){
  return(
    <div className="mt-6 w-full flex justify-around h-screen overflow-y-scroll mb-12 p-6">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-8 gap-x-8 p-6 mx-auto h-fit">
        {children}
      </div>
    </div>
  )
}