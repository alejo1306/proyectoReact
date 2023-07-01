import './App.css';
import NavBar from './navbar/navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="To Be Continued" />
    </div>
  );
}

export default App;
