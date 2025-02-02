import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getItem } from "../../AsyncMock";
import Contador from "./CountComponent";

export default function ItemDetail () {
    const {id} = useParams ();
    const [Item, setItem] = useState (null);
    

    useEffect (()=> {
        setItem(getItem(id));
    }, []); 
    return (
        <>
            <h2>{Item?.title}</h2>
            <img src={Item?.image} alt={Item?.title} style={{maxWidth:"450px"}} />
            <h3>precio:  {Item?.price}</h3>
            <p>categoria: {Item?.category}</p>
            <p>Descripcion: {Item?.description}</p>
            <Contador/>
            <button>agregar al carrito </button>

        </>
    );

}