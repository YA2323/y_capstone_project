import React, {} from 'react';
import './style/App.css';
import RandomFlag from "./components/RandomFlag";
import AnswerGallery from "./components/AnswerGallery";
import useAnswer from "./hooks/useAnswer";

function App() {

    const {answerContent, addAnswer} = useAnswer();

    return (
        <>
            <h1>FLAG GAME</h1>
            <RandomFlag addAnswer={addAnswer}/>
            <AnswerGallery allAnswers={answerContent}/>
        </>
    );
}

export default App;
