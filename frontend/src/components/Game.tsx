import {Button} from "@mui/material";
import useFlags from "../hooks/useFlags";
import "../style/Game.css"
import {useEffect, useState} from "react";

type GameProps = {
    addAnswer: (answer: string) => Promise<void>
}

export default function Game(props: GameProps) {

    const {randomFlags, getRandomEuroFlags} = useFlags()

    const [randomShuffledFlags, setRandomShuffledFlags] = useState<string[]>([])

    useEffect(() => {
        const flagAnswers: string[] = [randomFlags.rightFlag, randomFlags.wrongFlagOne, randomFlags.wrongFlagTwo, randomFlags.wrongFlagThree]
        const shuffledFlags = shuffle(flagAnswers)
        setRandomShuffledFlags(shuffledFlags)
    }, [randomFlags])

    const handleAnswerB1Click = () => {
        if (randomShuffledFlags.at(0) === randomFlags.rightFlag) {
            props.addAnswer(randomShuffledFlags.at(0) + " - RIGHT ANSWER!")
                .then()
        } else {
            props.addAnswer(randomShuffledFlags.at(0) + " - WRONG ANSWER!")
                .then()
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

