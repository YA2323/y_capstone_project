import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Game from "./Game";

export default function AllRoutes() {


    return (
        <>
            <Routes>
                <Route path={"/game"} element={<Game/>} />
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    )
}
