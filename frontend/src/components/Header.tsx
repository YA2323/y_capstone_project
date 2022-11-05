import {NavLink} from "react-router-dom";
import "../style/Header.css"

export default function Header() {


    return (
        <header className={"header"}>
            <h1>GUESS THE FLAG</h1>
            <nav className={"menu"}>
                <NavLink className={"nav"} to={"/"}>HOME</NavLink>
                <NavLink className={"nav"} to={"/game/history"}>HISTORY</NavLink>
            </nav>
        </header>
    )
}
