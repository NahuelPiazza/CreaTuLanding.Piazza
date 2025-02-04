import { useEffect, useState } from "react";
import "./ItemListConteiner.css"
import { useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import { getCategory, getItems } from "../../AsyncMock";

export default function ItemListCont () {
    const [Items, setItems] = useState (null);
    const {catId} = useParams();

    useEffect(() => {
        if (!catId) {
            getItems().then((response) => setItems(response));
        } else {
            getCategory(catId).then((response) => setItems(response));
        }
    }, [catId]);
    
    return (
        <>
            <h1>Vista de Home {catId}</h1>
            <div style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px",
                }}>
                {Items?.map((Item) => (
                <ItemCard key={Item.id} Item={Item} />
                ))}
            </div>
        </>
    );
}
//ver video clase 5 para guiarse, aca colocamos el mapeo de los productos y vinculamos el filtrado por categoria