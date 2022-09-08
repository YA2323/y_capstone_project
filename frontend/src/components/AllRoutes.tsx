import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import useAnswer from "../hooks/useAnswers";
import GameHistory from "./GameHistory";


export default function AllRoutes() {


    const {addAnswer, answerTrueOrFalse,deleteAllAnswers} = useAnswer()

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/game"} element={<Game addAnswer={addAnswer}/>}/>
                <Route path={"/game/history"} element={<GameHistory allAnswers={answerTrueOrFalse} deleteAllAnswers={deleteAllAnswers}/>}/>
            </Routes>
        </>
    )
}
