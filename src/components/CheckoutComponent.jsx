import { useContext, useState } from "react"
import { addOrder } from "../firebase/firebase";
import { cartContext } from "../context/cartContext";


export default function CheckComp ({total, cantidad, products, formData}) {
    const [orderId, setOrderId] = useState(null)
    const [clearCart] = useContext(cartContext);


    const handleClick = () => {

        
        const buyer = {
            alias:formData.name,
            phone:formData.number,
            email:formData.email,
        }
        const items = 
        products.map(prod => ({
                id: prod.id,
                name: prod.title,
                price: prod.price,
                units: cantidad[prod.id] || 0
            })).filter(item => item.units > 0);
        const newOrder = {
            buyer,
            date: new Date(),
            items,
            total: {total},
        };
        
        addOrder(newOrder).then((id) => {
            setOrderId(id);
            clearCart();
        });
      };


    return (
        <>
            
      <button onClick={handleClick}>todo correcto, enviar a presupuestar</button>
      
      {orderId && <p>numero de orden: {orderId}</p>}
        </>
    )
}