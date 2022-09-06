import {Button} from "@mui/material";
import useFlags from "../hooks/useFlags";
import "../style/Game.css"
import useAnswer from "../hooks/useAnswers";
import {useEffect, useState} from "react";


export default function Game() {

    const {randomFlags, getRandomEuroFlags} = useFlags()
    const {addAnswer} = useAnswer()

    const [randomShuffledFlags, setRandomShuffledFlags] = useState<string[]>([])

    useEffect(() => {
        const flagAnswers: string[] = [randomFlags.rightFlag, randomFlags.wrongFlagOne, randomFlags.wrongFlagTwo, randomFlags.wrongFlagThree]
        const shuffledFlags = shuffle(flagAnswers)
        setRandomShuffledFlags(shuffledFlags)
    }, [randomFlags])

    const handleAnswerB1Click = () => {
        if (randomShuffledFlags.at(0) === randomFlags.rightFlag) {
            addAnswer(randomShuffledFlags.at(0) + " - RIGHT ANSWER!")
        } else {
            addAnswer(randomShuffledFlags.at(0) + " - WRONG ANSWER!")
        }
    }

    const handleNextFlag = () => {
        getRandomEuroFlags()
    }

    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }

    return (

        <>
            <Button onClick={handleAnswerB1Click} id={"b1"}>{randomShuffledFlags.at(0)}</Button>


            <Button id={"b2"}>{randomShuffledFlags.at(1)}</Button>
            <Button id={"b3"}>{randomShuffledFlags.at(2)}</Button>
            <Button id={"b4"}>{randomShuffledFlags.at(3)}</Button>


            <Button onClick={handleNextFlag} id={"b0"}>NEXT FLAG</Button>

            <div className={"imgFlag"}>
                <img src={randomFlags.rightFlagUrl} alt={"CLICK TO START THE GAME!"}/>
            </div>

        </>
    )
}

