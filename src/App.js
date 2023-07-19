import './App.css';
import NavBar from './navbar/navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juegos from '../src/rutas/Juegos';
import Consolas from '../src/rutas/Consolas';
import Cartwidget from '../src/navbar/CartWidget/Cartwidget';
import Inicio from '../src/rutas/Inicio';
import Error from '../src/rutas/Error';
import ItemDetailContainer from './ItemDetail/ItemDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Juegos' element={<Juegos />} />
          <Route path='/Consolas' element={<Consolas />} />
          <Route path='/juegos/:categoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/Cartwidgets' element={<Cartwidget />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
