import { createContext, useState } from "react";
import Swal from "sweetalert2";



export const cartContext = createContext(false) // colocamos false como estado inicial(simboliza que esta vacio)

export function CartProvider ({children}) {

    const [cart, setCart] = useState ([]);

//agregamos item al carrito
const addItem = (item) => {
    const itemExists = cart
    .some(cartItem => cartItem.id === item.id);
    if (!itemExists) {
        setCart((prevCart) => [...prevCart, item]);
    } else {
        Swal.fire("ya agregaste este producto al presupuesto");
    }
};
    


// funcion para eliminar producto del carrito

const deleteItem = (itemid) => {
    setCart((prevCart =>
        prevCart.filter(item => item.id !== itemid)
        
    ));
}; 

// Función para vaciar el carrito
const clearCart = () => {
    setCart([]);
    Swal.fire("enviado a presupuestar", "pronto se pondran en contacto con usted", "success");
};



    return (
        <cartContext.Provider value={[cart, addItem, deleteItem,clearCart]}>
            {children}
        </cartContext.Provider>
    )
}