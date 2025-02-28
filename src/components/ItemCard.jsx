import {Link} from "react-router-dom"
import "./ItemCard.css"


export default function ItemCard ({prod}) {

    return (
        <>
            <div className="Card-ctn">
                
                <div className="img-ctn">
                    <img src={prod.image} alt={prod.title} className="Card-img"/>
                </div>

                <h2 className="title">{prod.title}</h2>
                
                
                <Link to={`/item/${prod.id}`}>
                    <button className="CartButton">
                        mas detalles
                    </button>
                </Link>
            </div>
        </>
    );
    
}