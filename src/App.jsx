import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css' 
import ItemListCont from './components/itemListConteiner';
import NavBarComponent from './components/NavBarComponent';
function App() {

  return (
    // <></> son los contenedores globales de toda la app
    <> 
      <BrowserRouter>
        <NavBarComponent/>

        <Routes>
          <Route exact path="/" element={<ItemListCont />} />
          <Route exact path= "/category/:catId" element= {<ItemListCont/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App
