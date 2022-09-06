import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import useAnswer from "../hooks/useAnswers";


export default function AllRoutes() {


    const {addAnswer, answerTrueOrFalse,deleteAllAnswers} = useAnswer()

    return (
        <>
            <Routes>
                <Route path={"/game"} element={<Game answerTrueOrFalse={answerTrueOrFalse} addAnswer={addAnswer} deleteAllAnswers={deleteAllAnswers}/>}/>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </>
    )
}
