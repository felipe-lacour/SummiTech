import { useState, useEffect } from "react"
import { getFirestore, doc, getDoc } from 'firebase/firestore' 


export function useItem (itemId){
  const [item, setItem] = useState()
  useEffect(() => {
    const db = getFirestore()
    const refDoc = doc(db, 'items', itemId)
  
    getDoc(refDoc)
      .then(snapshot => {
        if(!snapshot.exists()){
          setItem('no hay')
        } else {
          setItem({ id: snapshot.id, data: snapshot.data()})
        }
    })
  }, [itemId])
  return item
}