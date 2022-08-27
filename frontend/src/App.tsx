import React, {} from 'react';
import './style/App.css';
import RandomFlag from "./components/RandomFlag";
import AnswerGallery from "./components/AnswerGallery";
import useAnswer from "./hooks/useAnswer";
import useWrongAnswer from "./hooks/useWrongAnswer";

function App() {

    const {answerContent, addAnswer} = useAnswer();
    const {wrongAnswer, addWrongAnswer} = useWrongAnswer();

    return (
        <>
            <h1>FLAG GAME</h1>
            <RandomFlag addAnswer={addAnswer} addWrongAnswer={addWrongAnswer}/>
            <AnswerGallery allAnswers={answerContent} allWrongAnswers={wrongAnswer}/>
        </>
    );
}

export default App;
