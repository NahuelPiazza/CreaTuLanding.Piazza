import { useContext, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { cartContext } from "../context/cartContext";
import Contador from "./CountComponent";
import "./cartCard.css"

export default function CartCard ({product, onSumadorChange}) {
    const [deleteItem] =useContext(cartContext)
    const [sumador, setSumador] = useState(1)
    
    const sumadorChange = (valorActualizado) => {
        setSumador(valorActualizado);
        onSumadorChange(product.id, valorActualizado);
    }
    
    const deleteOnClick = () => {
        deleteItem(product.id)
        
    };

    return (
        <>
        <section className="cartCard-ctn">
            <div className="img-conteiner">
                <img src={product.image} alt="imagen" />
                <h3>{product.title}</h3>
            </div>
            <div className="price-ctn">
                <Contador newValue={sumadorChange}/>
                <p> us${product.price*sumador} </p>
                <button onClick={deleteOnClick} className="deleteBTN"> <RiDeleteBin5Line/> </button>
            </div>
        </section>
        
        </>
    )
}