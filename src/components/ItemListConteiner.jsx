import "./ItemListConteiner.css"
export default function ItemListCont ({greetings}) {
    return (
        <div className="ItemListCont">
            <p>{greetings}</p>
        </div>
    );
}
//ver video clase 5 para guiarse, aca colocamos el mapeo de los productos y vinculamos el filtrado por categoria