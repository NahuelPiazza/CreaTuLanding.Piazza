import React, { useState } from 'react';

const Contador = () => {
    const [sumador, setSumador] = useState(0);
    const stock = 9; //lo tengo que pasar por props al min y max

    const sumar = () => {
        sumador < stock ? setSumador(sumador + 1) : null;
    };

    const restar = () => {
        sumador > 0 ? setSumador(sumador - 1) : null;
    };

    return (
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"15px", marginBottom:"15px"
        }}>
        <div style={{display:"flex", justifyContent:"center"}} onClick={sumar}>
            <button>+</button>
        </div>

        <p style={{textAlign:"center", fontSize:"20px"}}>{sumador}</p>

        <div style={{display:"flex", justifyContent:"center"}} onClick={restar}>
            <button>-</button>
        </div>
        </div>
    );
    };

export default Contador;