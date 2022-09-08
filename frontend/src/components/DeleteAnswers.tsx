import {Answer} from "./Answer";

type deleteAnswerProps = {
    answer: Answer,
    deleteAllAnswers: (id: string) => void

}


export default function DeleteAnswers(props: deleteAnswerProps) {


    return (
        <>
            <div>
                <button onClick={() => props.deleteAllAnswers(props.answer.id)}>DELETE</button>
            </div>

        </>
    )
}
