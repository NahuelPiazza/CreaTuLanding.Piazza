import "./BannerComponent.css"
export default function BannerComponent ({greetings}) {
    return (
        <div className="Banner">
            <p>{greetings}</p>
        </div>
    );
}