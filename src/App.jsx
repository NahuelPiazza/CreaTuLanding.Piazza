import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css' 
import ItemListCont from './components/itemListConteiner';
import NavBar from './components/NavBarComponent';
function App() {
  return (
    // <></> son los contenedores globales de toda la app
    <> 
      <BrowserRouter>
        <Routes>
          
        </Routes>
        <NavBar/>
        <ItemListCont greetings = "hola, bienvenido a mi E-comerce"/>
      
      </BrowserRouter>
    </>
  );
}

export default App
