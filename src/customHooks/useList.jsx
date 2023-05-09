import { useState, useEffect } from "react"


export function useList (productList, n){
  const [list, setList] = useState([])
  useEffect(() => {
    const productPromise = new Promise ((res, rej) => {
      setTimeout(()=>{
        res(productList);
      }, n)
    })

    productPromise.then(result => setList(result))
  }, [productList])

  return list
}