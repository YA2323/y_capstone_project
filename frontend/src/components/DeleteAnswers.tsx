import {Answer} from "./Answer";

type deleteAnswerProps = {
    answer: Answer,
    deleteAllAnswers: (id: string) => void

}


export default function DeleteAnswers(props: deleteAnswerProps) {


    return (
        <>
            <li key={props.answer.id}>
            <div>
                <button onClick={() => props.deleteAllAnswers(props.answer.id)}>DELETE</button>
            </div>
        </li>

        </>
    )
}
