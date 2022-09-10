import {Answer} from "./Answer";
import DeleteAnswers from "./DeleteAnswers";
import "../style/GameHistory.css"

type gameHistoryProps = {
    allAnswers: Answer[],
    deleteAllAnswers: (id: string) => void

}

export default function GameHistory(props: gameHistoryProps) {


    return (
        <>
            <div className={"answerHistory"}>
                <h2>GAME HISTORY</h2>
                {props.allAnswers.map((element) => <li key={element.id}> {element.answerTrueOrFalse} {element.points}
                    <DeleteAnswers answer={element} deleteAllAnswers={props.deleteAllAnswers}/></li>)}
            </div>
        </>
    )
}
