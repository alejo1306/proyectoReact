import './App.css';
import NavBar from './navbar/navbar'
import ItemListContainer from '../src/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../src/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../src/rutas/Inicio';
import Error from '../src/rutas/Error';
import CartContext from './CartContext/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <CartContext.Provider value={[]}>

        </CartContext.Provider>
        <Routes>
          <Route path='/' element={<Inicio />} />

          <Route path='/category/:categoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />


          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
