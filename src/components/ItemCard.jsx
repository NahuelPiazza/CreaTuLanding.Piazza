export default function ItemCard ({Item}) {

    return (
        <>
            <article>
                <h2>{Item.title}</h2>
                <img src={Item.image} alt={Item.title} />
                <button>Mas detalles</button>
            </article>
        </>
    )
    
}