import "../style/Home.css"
import {useNavigate} from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    return (
        <>
            <h2>CHOOSE GAME MODE</h2>
            <div className={"continentButtons"}>
                <button onClick={() => navigate("/game/europe")} className={"continentsBtn"} id={"EuBtn"}>EUROPEAN FLAGS</button>
                <button onClick={() => navigate("/game/asia")} className={"continentsBtn"} id={"AsianBtn"}>ASIAN FLAGS</button>
                <button onClick={() => navigate("/game/africa")} className={"continentsBtn"} id={"AfricaBtn"}>AFRICAN FLAGS</button>
                <button onClick={() => navigate("/game/america")} className={"continentsBtn"} id={"NorthBtn"}>NORTH / SOUTH AMERICAN FLAGS</button>
                <button onClick={() => navigate("/game/random")} className={"continentsBtn"} id={"randomBtn"}>RANDOM FLAGS</button>
            </div>
        </>
    )
}
