import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { ItemListContainer } from './components/ItemList/ItemListContainer';
import { CartContextProvider} from './context/CartContext'
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import { LogInContextProvider } from './context/LogInContext';


function App() {
  

  return (
    <LogInContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:id' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Default/>}/>
        </Routes>
      </CartContextProvider>
    </LogInContextProvider>
  );
}

export default App;
