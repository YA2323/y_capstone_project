import "../style/Home.css"
import {useNavigate} from "react-router-dom";


export default function Home() {

    const navigate = useNavigate();

    return (
        <>
            <h2>CHOOSE GAME MODE</h2>
            <div className={"contBtns"}>
                <button onClick={() => navigate("/game/europe")} className={"contBtns2"} id={"EuBtn"}>EUROPEN FLAGS</button>
                <button onClick={() => navigate("/game/asia")} className={"contBtns2"} id={"AsianBtn"}>ASIAN FLAGS</button>
                <button className={"contBtns2"} id={"AfricaBtn"}>AFRICAN FLAGS</button>
                <button className={"contBtns2"} id={"NorthBtn"}>NORTH AMERICAN FLAGS</button>
                <button className={"contBtns2"} id={"SouthBtn"}>SOUTH AMERICAN FLAGS</button>
                <button className={"contBtns2"} id={"RndmBtn"}>RANDOM FLAGS</button>
            </div>
        </>
    )
}
