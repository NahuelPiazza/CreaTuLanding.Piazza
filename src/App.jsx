import './App.css' 
import ItemListCont from './components/itemListConteiner';
import NavBar from './components/NavBarComponent';
function App() {
  return (
    // <></> son los contenedores globales de toda la app
    <> 
        <NavBar/>
        <ItemListCont greetings = "hola, bienvenido a mi E-comerce"/>
    </>
  );
}

export default App
