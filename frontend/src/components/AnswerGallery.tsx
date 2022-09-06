import {Answer} from "./Answer";

type AnswerGalleryProps = {
    allAnswers: Answer[]
}


export default function AnswerGallery(props: AnswerGalleryProps) {


    return (
        <>
            <div>
                {props.allAnswers.map((element) => <li key={element.id}> {element.answerTrueOrFalse} </li>)}
            </div>
        </>
    )
}
