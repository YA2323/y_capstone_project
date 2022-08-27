import {NavLink} from "react-router-dom";

export default function Header() {


    return (
        <header>
            <h1>GUESS THE FLAG</h1>
            <nav className={"menu"}>
                <NavLink to={"/"}>HOME</NavLink>
                <NavLink to={"/game"}>GAME</NavLink>
            </nav>
        </header>
    )
}
