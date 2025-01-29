import CartComponent from "./CartComponent";
import ULComponent from "./UlComponent";
import "./NavBarComponent.css"
import { BsBuildings } from "react-icons/bs";
export default function NavBar() {
    return (
      <nav>
        
        <BsBuildings className="NavIcon"/>
        <ULComponent/>
        <CartComponent/>
        
      </nav>
    );
  }