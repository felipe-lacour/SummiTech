import Header from './components/Header.jsx';
import ItemListContainer from './container/IemListContainer.jsx';
import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <ItemListContainer greeting={"Bienvenidos a SummiTech, el e-commerce donde todos tus sueños montañistas se harán realidad."}/>
    </>
  );
}

export default App;
