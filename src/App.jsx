import './App.css' 
import BannerComponent from './components/BannerComponent';
import NavBar from './components/navbar';
function App() {
  return (
    // <></> son los contenedores globales de toda la app
    <> 
        <NavBar/>
        <BannerComponent greetings="bienvenido a mi E-Comerce"/>
    </>
  );
}

export default App
