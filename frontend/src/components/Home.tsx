import "../style/Home.css"


export default function Home() {
    return (
        <>
            <h3>HOME</h3>
            <div className={"contBtns"}>
                <button className={"contBtns2"} id={"EuBtn"}>EUROPEN FLAGS</button>
                <button className={"contBtns2"} id={"AsianBtn"}>ASIAN FLAGS</button>
                <button className={"contBtns2"} id={"AfricaBtn"}>AFRICAN FLAGS</button>
                <button className={"contBtns2"} id={"NorthBtn"}>NORTH AMERICAN FLAGS</button>
                <button className={"contBtns2"} id={"SouthBtn"}>SOUTH AMERICAN FLAGS</button>
                <button className={"contBtns2"} id={"RndmBtn"}>RANDOM FLAGS</button>
            </div>
        </>
    )
}
