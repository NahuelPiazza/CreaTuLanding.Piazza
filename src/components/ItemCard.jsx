import {Link} from "react-router-dom"
export default function ItemCard ({Item}) {

    return (
        <>
            <article style={{
                    display:"flex", 
                    flexDirection:"column",
                    justifyContent:"center",
                    gap:"15px",
                    alignItems:"center",
                    border: '1px solid grey', 
                    padding: 10 }}>

                <h2>{Item.title}</h2>
                <img src={Item.image} alt={Item.title} style={{maxWidth:"250px"}}/>
                <button>
                    <Link to={`/Item/${Item.id}`}>mas detalles</Link>
                </button>
            </article>
        </>
    );
    
}