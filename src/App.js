import { Home } from './views/Home';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Detail } from './views/Detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:id' element={<Home/>}/>
      <Route path='/category/mountain/:id' element={<Detail/>}/>
      <Route path='/category/ski/:id' element={<Detail/>}/>
      <Route path='/category/climbing/:id' element={<Detail/>}/>
      <Route path='*' element={<div>Tomatelas</div>}/>
    </Routes>
  );
}

export default App;
