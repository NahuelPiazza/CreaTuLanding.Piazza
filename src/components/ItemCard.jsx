import {Link} from "react-router-dom"
import "./ItemCard.css"
export default function ItemCard ({Item}) {

    return (
        <>
            <div className="Card-ctn" 
            // style={{
            //         display:"flex", 
            //         flexDirection:"column",
            //         justifyContent:"center",
            //         gap:"10px",
            //         alignItems:"center",
            //         borderColor:"#84A98C",
            //         borderRadius:"5px",
            //         padding: 30,
            //         borderStyle:"solid",
            //         borderWidth:"1px",
            //         width:"300px",
            //         maxHeight:"600px"
                    
                    >
                <div className="img-ctn">
                    <img src={Item.image} alt={Item.title} className="Card-img"/>
                </div>

                <h2 className="title">{Item.title}</h2>
                <Link to={`/Item/${Item.id}`}>
                    <button className="CartButton">
                        mas detalles
                    </button>
                </Link>
            </div>
        </>
    );
    
}