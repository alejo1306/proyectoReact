import './App.css';
import NavBar from './navbar/navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../src/rutas/Inicio';
import Error from '../src/rutas/Error';
import { CartProvider } from './CartContext/CartContext';
import CartPage from './PaginaCart/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider> { }
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/category/:categoria' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<Error />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
