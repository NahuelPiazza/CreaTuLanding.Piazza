export default function ButtonComponent ({text, color, backcolor}) {
    return (
        <button style= {{color: color , backgroundColor: backcolor}}> {text} </button>
    );

}  
//2 formas de agregar props function ... (props o {nombre props})
// <> {props.nombre del prop} o {nomre del prop} </>