import CartComponent from "./CartComponent";
import { Link } from "react-router-dom";
import "./NavBarComponent.css"
import { BsBuildings } from "react-icons/bs";
import "./Button.css"
export default function NavBarComponent () {
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
            <CartComponent/>
          </Link>
        </button>
        
        
      </nav>
    );
  }