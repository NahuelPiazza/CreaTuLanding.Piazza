import { useState } from "react"
import CheckComp from "./CheckoutComponent"
import { useLocation } from "react-router-dom";
import "./checkoutFormComponent.css"
export default function CheckoutForm({}) {

    const [formData, setFormData] = useState({ name: '', email: '', number: '' });
    const [showCheckout, setShowCheckout] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
    };
    
    const location = useLocation()
    const info = location.state;

    const handleSubmit = (e) => {
    e.preventDefault();

      // Valida que todos los campos estén completos
    if (!formData.name || !formData.email || !formData.number) {
        console.error("error completar datos");
          return; // No envia si hay campos vacíos
    } 

    setShowCheckout(true);
    
    
};

    return (
    
    <><section>
        <form onSubmit={handleSubmit} className="FormCTN">
            <div className="input-ctn">
                <label htmlFor="name">Nombre:  </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="nombre completo"
                    value={formData.name} 
                    className="inputstyle"
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="input-ctn">
                <label htmlFor="email">Email:  </label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email de contacto"
                    value={formData.email} 
                    onChange={handleChange} 
                    className="inputstyle"
                    required 
                />
            </div>

            <div className="input-ctn">
                <label htmlFor="number">numero:   </label>
                <input 
                    type="number" 
                    placeholder="numero de telefono"
                    id="number" 
                    name="number" 
                    value={formData.number}
                    className="inputstyle"
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="finishButton" >
                chequear datos
            </button>
        
        </form>
        </section>
    {showCheckout && (
        <CheckComp total={info.total} products={info.cart} cantidad={info.quantity} formData={formData} />
    )}
    </>
    );
};