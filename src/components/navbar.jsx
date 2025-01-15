import CartComponent from "./CartComponent";
import ULComponent from "./ULcomponent";
import "./navbar.css"
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