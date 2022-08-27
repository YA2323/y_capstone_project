import {Answer} from "./Answer";
import {WrongAnswer} from "./WrongAnswer";

type AnswerGalleryProps = {
    allAnswers: Answer[]
    allWrongAnswers : WrongAnswer[]

}


export default function AnswerGallery(props: AnswerGalleryProps) {


    return (
        <>
            <div>
                {props.allAnswers.map((element) => <li key={element.id}> {element.answerContent} </li>)}
                {props.allWrongAnswers.map((element) => <li key={element.id}> {element.wrongAnswer} </li>)}
            </div>
        </>
    )
}
