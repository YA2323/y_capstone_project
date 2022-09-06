import {Answer} from "./Answer";
import DeleteAnswers from "./DeleteAnswers";

type AnswerGalleryProps = {
    allAnswers: Answer[],
    deleteAllAnswers: (id: string) => void

}


export default function AnswerGallery(props: AnswerGalleryProps) {


    return (
        <>
            <div>
                {props.allAnswers.map((element) => <li key={element.id}> {element.answerTrueOrFalse} <DeleteAnswers answer={element} deleteAllAnswers={props.deleteAllAnswers} /></li>)}
            </div>
        </>
    )
}
