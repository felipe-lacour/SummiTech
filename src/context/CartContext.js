import { createContext } from "react"
import { useState } from "react";

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const empty = () => {
    setBasket([])
  }

  const handleBasket = (item, itemId, amount) => {
    const found = basket.find(i => i.id === itemId)
    if(!found){
      const itemObj = { ...item, data:{...item.data, amount: amount }};
      setBasket([...basket, itemObj])
    } else {
      const updatedBasket = basket.map(i => {
        if(i.id === itemId){
          if (i.data && i.data.amount) {
            return { ...i, data: { ...i.data, amount: i.data.amount + amount } }
          } else {
            return { ...i, data: { ...i.data, amount: amount } }
          }
        }
        return i
      })
      setBasket(updatedBasket)
    }
  }

  const handleLess = (id) => {
    const newBasket = basket.map(i => {
      if(i.id === id){
        if(i.data.amount === 1){
          return null
        } else if (i.data.amount > 0){
          return {...i, data:{...i.data, amount: i.data.amount - 1 }}
        }
      }
      return i
    }).filter(Boolean)
    setBasket(newBasket)
  }

  const handleMore = (id) => {
    const newBasket = basket.map(i => {
      if(i.id === id){
        return {...i, data:{...i.data, amount: i.data.amount + 1 }}
      } else {
        return i
      }
    })
    setBasket(newBasket)
  }

  const handleRemove = (id) => {
    const newBasket = basket.filter(i => i.id !== id)
    setBasket(newBasket)
  }

  const contextValue = {
    basket,
    handleBasket,
    handleLess,
    handleMore,
    empty,
    handleRemove
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
