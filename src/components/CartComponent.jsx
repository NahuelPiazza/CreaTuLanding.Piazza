import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import CartCard from "./cartCard";
import {Link, useNavigate, } from "react-router-dom"


export default function CartComponent () {
    const [quantity, setQuantity] = useState({})
    const [cart, setCart] = useContext(cartContext)
    const [sumador, setSumador] = useState(1)
    const navigate = useNavigate();

    const calcularTotal = () => {
        return cart.reduce((total, prod) => {
            const cantidad = quantity[prod.id] || 0;
            return total + prod.price * cantidad;
        }, 0);

    };
    const total = calcularTotal(cart)

    const handleSumadorChange = (id, newSumador) => {
        setQuantity(prev => ({ ...prev, [id]: newSumador }));
        console.log(`Producto ID: ${id}, Nueva cantidad: ${newSumador}`);
        
    };
    
    
    const info = {cart,quantity,total}

    const handleclick = () => {
        
        if (cart.length >= 1) {
            console.log("hay items")
            navigate("/Cart/checkout", {state: {info}}) 
            
        } else {
            console.log("no hay items")
        }
    }

    return (

        <div>
            <div>
                {cart.map((prod) =>
                    < CartCard key={prod.id} product={prod} onSumadorChange={handleSumadorChange}/>)
                }
            </div>
            <div>
                <p>total: us${total}</p>
                
                    <button onClick={handleclick}>
                        finalizar
                    </button>
                
            </div>
        </div>
    );
}