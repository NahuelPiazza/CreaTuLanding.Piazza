import CartComponent from "./CartComponent";
import { Link } from "react-router-dom";
import "./NavBarComponent.css"
import { BsBuildings } from "react-icons/bs";

import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
export default function NavBarComponent () {
  const [cart] = useContext(cartContext)
    return (
      <nav>
        
        <button className="btn-nav">
          <Link to= "./" ><BsBuildings className="NavIcon"/></Link>
        </button>

        <button className="btn-nav">
          <Link to="./category/cabañas" style={{color:"white"}}> Cabañas</Link>    
            
        </button>
        <button className="btn-nav">
          <Link to="./category/modernas" style={{color:"white"}} >Modernas</Link>
        </button >
        <button className="btn-nav">
          <Link to="./category/edificios" style={{color:"white"}}>Edificios</Link>
        </button>
        
        <button className="btn-nav">
          <Link to= "./Cart" >
            <p><FaShoppingCart/>  {cart.length} </p>
          </Link>
        </button>
        
        
      </nav>
    );
  }