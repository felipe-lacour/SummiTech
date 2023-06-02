import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import {CartContext} from './context/CartContext'
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import { LogInContext } from './context/LogInContext';
import { LogIn } from './components/LogIn/LogIn';

function App() {
  const [basket, setBasket] = useState([]);
  const [loggedIn, setLoggedIn] = useState(null);


  return (
    <LogInContext.Provider value={{loggedIn, setLoggedIn}}>
      <CartContext.Provider value={{basket, setBasket}}>
        <Routes>
          <Route path='/' element={loggedIn ? <ItemListContainer/> : <LogIn/>}/>
          <Route path='/category/:id' element={loggedIn ? <ItemListContainer/> : <LogIn/>}/>
          <Route path='/item/:id' element={loggedIn ? <ItemDetailContainer/> : <LogIn/>}/>
          <Route path='/cart' element={loggedIn ? <Cart/> : <LogIn/>}/>
          <Route path='*' element={<Default/>}/>
        </Routes>
      </CartContext.Provider>
    </LogInContext.Provider>
  );
}

export default App;
