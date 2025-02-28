import { useContext, useState } from "react";
import { cartContext } from "../context/cartContext";
import CartCard from "./cartCard";
import {Link} from "react-router-dom"


export default function CartComponent () {
    const [quantity, setQuantity] = useState({})
    const [cart] = useContext(cartContext)

    const calcularTotal = () => {
        return cart.reduce((total, prod) => {
            const cantidad = quantity[prod.id] || 0;
            return total + prod.price * cantidad;
        }, 0);

    };
    const handleSumadorChange = (id, newSumador) => {
        setQuantity(prev => ({ ...prev, [id]: newSumador }));
        console.log(`Producto ID: ${id}, Nueva cantidad: ${newSumador}`);
        
    };
    const total = calcularTotal(cart)

    const info = {cart,quantity,total}
    return (

        <div>
            <div>
                {cart.map((prod) =>
                    < CartCard key={prod.id} product={prod} onSumadorChange={handleSumadorChange}/>)
                }
            </div>
            <div>
                <p>total: us${total}</p>
                <Link to={"/Cart/checkout"} state={info}>
                    <button>
                        finalizar
                    </button>
                </Link>
            </div>
        </div>
    );
}