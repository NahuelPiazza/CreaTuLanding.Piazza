import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css' 
import ItemListCont from './components/itemListConteiner'
import NavBarComponent from './components/NavBarComponent';
import CartComponent from './components/CartComponent';
import ItemDetail from './components/ItemDetail';
import Error404 from './components/Error404';
import { CartProvider} from './context/cartContext';
import CheckoutForm from './components/CheckoutFormComponent';

function App() {

  return (
    // <></> son los contenedores globales de toda la app
    <> 
      <CartProvider>
        <BrowserRouter>
        
            <NavBarComponent/>
            <Routes>
              <Route exact path="/" element={<ItemListCont/>} />
              <Route exact path= "/category/:catId" element= {<ItemListCont/>}/>
              <Route exact path= "/Cart" element= {<CartComponent/>}/>
              <Route exact path= "/item/:id" element = {<ItemDetail/>}/>
              <Route exact path='*' element = {<Error404/>} /> 
              <Route exact path= "/Cart/checkout" element={<CheckoutForm/>}/>
            </Routes>
        
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
