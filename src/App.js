import { Home } from './views/Home';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category/:id' element={<Home/>}/>
      <Route path='*' element={<div>Tomatelas</div>}/>
    </Routes>
  );
}

export default App;
