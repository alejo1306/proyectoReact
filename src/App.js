import './App.css';
import NavBar from './navbar/navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cartwidget from '../src/navbar/CartWidget/Cartwidget';
import Inicio from '../src/rutas/Inicio';
import Error from '../src/rutas/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Inicio />} />

          <Route path='/category/:categoria' element={<ItemListContainer />} />
          <Route path='/item/:categoria' element={<ItemListContainer />} />


          <Route path='/Cartwidgets' element={<Cartwidget />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
