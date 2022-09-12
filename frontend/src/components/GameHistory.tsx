import {Answer} from "./Answer";
import "../style/GameHistory.css"
import {Button} from "@mui/material";

type gameHistoryProps = {
    allAnswers: Answer[],
    deleteAllAnswers: (id: string) => void

}

export default function GameHistory(props: gameHistoryProps) {

    const handleDeleteClick = () => {
        if (props.allAnswers.length > 0) {
            props.deleteAllAnswers(props.allAnswers[0].id)
        }
    }

    return (
        <>
            <div className={"answerHistory"}>
                <h2>GAME HISTORY</h2>
                {props.allAnswers.map((element) => <li
                    key={element.id}> {element.answerTrueOrFalse} {element.points}</li>)}
                <Button id={"deleteBtn"} onClick={handleDeleteClick}>CLEAR ALL</Button>
            </div>
        </>
    )
}
