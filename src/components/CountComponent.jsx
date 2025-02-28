import React, { useState } from 'react';

const Contador = ({newValue}) => {
    const [sumador, setSumador] = useState(0);
    const stock = 4; 

    const sumar = () => {

        if (sumador < stock ) {
            const nuevoSumador = sumador + 1;
            setSumador(nuevoSumador);
            newValue(nuevoSumador);
        };
        
    };

    const restar = () => {

        if (sumador > 0) {
            const nuevoSumador = sumador - 1;
            setSumador(nuevoSumador);
            newValue(nuevoSumador);
        }
        
    };

    

    return (
        <div style={{
            display:"flex", 
            flexDirection:"row", 
            justifyContent:"center", 
            gap:"15px", 
            marginBottom:"15px"
        }}>
        <div style={{
            display:"flex", 
            justifyContent:"center",
            alignItems: "center",
            }} onClick={sumar}>
                
            <button style={{
                width:"4rem",
                backgroundColor:" rgba(0, 118, 79, 0)",
                color:"green",}}>+</button>
        </div>

        <p style={{
            textAlign:"center", 
            fontSize:"20px"
            }}>{sumador}</p>

        <div style={{
            display:"flex", 
            justifyContent:"center",
            alignItems: "center",
            
            }} onClick={restar}>

            <button style={{
                width:"4rem",
                backgroundColor:" rgba(0, 118, 79, 0)",
                color:"green",}}>-</button>
        </div>
        </div>
    );
    };

export default Contador;