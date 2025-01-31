import LiComponent from "./LIComponent";
export default function ULComponent () {
    return (
        <ul style={{listStyle: "none", display: "flex", flexDirection: "row" }}>
            <LiComponent link="cabañas"/>
            <LiComponent link="modernas"/>
            <LiComponent link="edificios"/>
        </ul>
    );

}