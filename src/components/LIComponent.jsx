import ButtonComponent from "./ButtonComponent";
import "../components/LiComponent.css"
export default function LiComponent (props) {
    return (
        <li>
            <ButtonComponent text={props.link} color="black" backcolor= "white"/>
        </li>
    );

}