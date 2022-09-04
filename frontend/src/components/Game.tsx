import {Button} from "@mui/material";
import useFlags from "../hooks/useFlags";
import "../style/Game.css"

export default function Game() {

    const {randomFlags, getRandomEuroFlags} = useFlags()

    const handleNeu = () => {
        getRandomEuroFlags()
    }

    const flagAnswers: string[] = [randomFlags.rightFlag,randomFlags.wrongFlagOne,randomFlags.wrongFlagTwo,randomFlags.wrongFlagThree]

    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }
    const randomFlagAnswers = shuffle(flagAnswers)

    return (

        <>
            <Button id={"b1"}>{randomFlagAnswers.at(0)}</Button>
            <Button id={"b2"}>{randomFlagAnswers.at(1)}</Button>
            <Button id={"b3"}>{randomFlagAnswers.at(2)}</Button>
            <Button id={"b4"}>{randomFlagAnswers.at(3)}</Button>
            <Button id={"b0"} onClick={handleNeu}>NEXT FLAG</Button>
            <div className={"imgFlag"}>
                <img src={randomFlags.rightFlagUrl} alt={"CLICK TO START THE GAME!"}/>
            </div>
        </>
    )
}

