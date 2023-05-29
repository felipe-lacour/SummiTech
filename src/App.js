import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import {CartContext} from './context/CartContext'
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Default from './components/Default';

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <CartContext.Provider value={{basket, setBasket}}>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Default/>}/>
      </Routes>
    </CartContext.Provider>
  );
}

export default App;
