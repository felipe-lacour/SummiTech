import { useState, useEffect } from "react"


export function useList (productList){
  const [list, setList] = useState([])
  useEffect(() => {
    const productPromise = new Promise ((res, rej) => {
      setTimeout(()=>{
        res(productList);
      }, 2000)
    })

    productPromise.then(result => setList(result))
  }, [productList])

  return list
}