import {Answer} from "../components/Answer";
import {WrongAnswer} from "../components/WrongAnswer";
import AnswerGallery from "../components/AnswerGallery";
import RandomFlag from "../components/RandomFlag";

type GameProps = {
    flagHook: {
        answerContent: Answer[],
        wrongAnswer: WrongAnswer[],
        addAnswer: (answer: string) => Promise<void>
        addWrongAnswer: (wrAnswer: string) => Promise<void>
    },
}

export default function Game(props: GameProps) {

    return (
        <>
            <AnswerGallery allAnswers={props.flagHook.answerContent} allWrongAnswers={props.flagHook.wrongAnswer}/>
            <RandomFlag addAnswer={props.flagHook.addAnswer} addWrongAnswer={props.flagHook.addWrongAnswer}/>
        </>
    )
}
