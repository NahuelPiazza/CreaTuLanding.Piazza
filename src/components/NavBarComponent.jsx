import CartComponent from "./CartComponent";
import { Link } from "react-router-dom";
import "./NavBarComponent.css"
import { BsBuildings } from "react-icons/bs";
export default function NavBarComponent () {
    return (
      <nav>
        
        <button><Link to= "./" ><BsBuildings className="NavIcon"/></Link></button>
        <button>
          <Link to="./category/cabañas">Cabañas</Link>
        </button>
        <button>
          <Link to="./category/modernas">Modernas</Link>
        </button>
        <button>
          <Link to="./category/edificios">Edificios</Link>
        </button>
        <CartComponent/>
        
      </nav>
    );
  }