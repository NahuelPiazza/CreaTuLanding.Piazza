import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../firebase/firebase";
import "./ItemDetail.css"
import { cartContext } from "../context/cartContext";

export default function ItemDetail () {
    const {id,} = useParams ();
    const [item, setitem] = useState (null);
    const [cart, addItem] = useContext(cartContext)


    useEffect (()=> {

        getSingleProduct(id).then((Response)=>{
            setitem(Response);

            
        });
        }, []); 

        const handleClick = () => {
            if (item) {
                addItem(item);

            }
        };

    return (
        <section className="detail-ctn">
            <div className="titleCTN">
                <h2>
                {item?.title} 
                </h2>
            </div>
            <div className="imgCTN">
                <img src={item?.image} alt="image" />
            </div>
            <div className="datos-ctn">
                    <p >Item / {item?.category}</p>
                    
                    <h3>
                    {item?.description}
                    </h3>
                    
                    
                    <span>Precio: US${item?.price}</span>

                    <button className="btn-cart"  onClick={handleClick}>
                        sumar al presupuesto
                    </button>
            </div>
            
        
        </section>
        
    );

}