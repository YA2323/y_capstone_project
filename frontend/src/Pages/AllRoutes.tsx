import useAnswer from "../hooks/useAnswer";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Game from "./Game";

export default function AllRoutes() {

    const flagHook = useAnswer();

    return (
        <>
            <Routes>
                <Route path={"/game"} element={<Game flagHook={flagHook}></Game>}/>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    )
}
