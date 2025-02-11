import { useEffect, useState } from "react";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import { getCategory, getItems } from "../../AsyncMock";
import ReactLoading from "react-loading"

export default function ItemListCont () {
    const [Items, setItems] = useState (null);
    const [loading, setLoading] = useState (true);
    const {catId} = useParams();

    useEffect(() => {
        if (!catId) {
            getItems().then((response) => {
                setItems(response);
                setLoading(false);
            });
        } else {
            getCategory(catId).then((response) => {
                setItems(response);
                setLoading(false);
            });
        }
    }, [catId]);
    
    return (
        <>
                
                { loading ? (
                    <div style={{display: "flex", flexDirection:"column", justifyContent:"center"}}>
                    <ReactLoading 
                    type="bubbles" 
                    color="blue" 
                    width="100px" 
                    height="50px" 
                    />
                    </div>
                )   
                 :
                    (
                    <section>
                        <h1>{catId}</h1>
                        <div style={{
                        display:"flex",
                        flexDirection:"column",
                        gap:"20px",
                        }}>
                        {Items?.map((Item) => (
                        <ItemCard key={Item.id} Item={Item} />
                        ))}
                        </div>
                    </section>
                )}
        </>
    );
}
//ver video clase 5 para guiarse, aca colocamos el mapeo de los productos y vinculamos el filtrado por categoria