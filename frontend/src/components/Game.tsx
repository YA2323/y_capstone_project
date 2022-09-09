import {Button} from "@mui/material";
import useFlags from "../hooks/useFlags";
import "../style/Game.css"
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type GameProps = {
    addAnswer: (answer: string, points: string) => Promise<void>
}


export default function Game(props: GameProps) {

    const {randomFlags, getRandomEuroFlags} = useFlags()
    const [randomShuffledFlags, setRandomShuffledFlags] = useState<string[]>([])

    const [actualPoints, setActualPoints] = useState(0)
    const [possiblePoints, setPossiblePoints] = useState(0)
    const [startButtonText, setStartButtonText] = useState("START")
    const [showAnswerBtns, setShowAnswerBtns] = useState(false)
    const [btnsDisabled,setBtnDisabled] = useState(false)


    const notifyTrue = () => {
        toast.success('Good Job!     + 5 Points', {
            theme: "colored",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const notifyFalse = () => {
        toast.error('Sorry, wrong Answer!     0 Points', {
            theme: "colored",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    useEffect(() => {
        const flagAnswers: string[] = [randomFlags.rightFlag, randomFlags.wrongFlagOne, randomFlags.wrongFlagTwo, randomFlags.wrongFlagThree]
        const shuffledFlags = shuffle(flagAnswers)
        setRandomShuffledFlags(shuffledFlags)
    }, [randomFlags])

    const handleAnswerB1Click = () => {
        if (randomShuffledFlags.at(0) === randomFlags.rightFlag) {
            props.addAnswer(randomShuffledFlags.at(0) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)

        } else {
            props.addAnswer(randomShuffledFlags.at(0) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setBtnDisabled(true)
    }

    const handleAnswerB2Click = () => {
        if (randomShuffledFlags.at(1) === randomFlags.rightFlag) {
            props.addAnswer(randomShuffledFlags.at(1) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)
        } else {
            props.addAnswer(randomShuffledFlags.at(1) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setBtnDisabled(true)
    }

    const handleAnswerB3Click = () => {
        if (randomShuffledFlags.at(2) === randomFlags.rightFlag) {
            props.addAnswer(randomShuffledFlags.at(2) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)
        } else {
            props.addAnswer(randomShuffledFlags.at(2) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setBtnDisabled(true)
    }

    const handleAnswerB4Click = () => {
        if (randomShuffledFlags.at(3) === randomFlags.rightFlag) {
            props.addAnswer(randomShuffledFlags.at(3) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)
        } else {
            props.addAnswer(randomShuffledFlags.at(3) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setBtnDisabled(true)
    }

    const handleNextFlag = () => {
        getRandomEuroFlags()
        setStartButtonText("NEXT FLAG")
        setShowAnswerBtns(true)
        setBtnDisabled(false)
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


            <div id={"points"}>Points : {actualPoints} / {possiblePoints}</div>

            {showAnswerBtns && (
                <div>
                    <Button disabled={btnsDisabled} onClick={handleAnswerB1Click} id={"b1"}>{randomShuffledFlags.at(0)}</Button>
                    <Button disabled={btnsDisabled} onClick={handleAnswerB2Click} id={"b2"}>{randomShuffledFlags.at(1)}</Button>
                    <Button disabled={btnsDisabled} onClick={handleAnswerB3Click} id={"b3"}>{randomShuffledFlags.at(2)}</Button>
                    <Button disabled={btnsDisabled} onClick={handleAnswerB4Click} id={"b4"}>{randomShuffledFlags.at(3)}</Button>
                </div>
            )}

            <Button onClick={handleNextFlag} id={"b0"}>{startButtonText}</Button>

            <div className={"imgFlag"}>
                <img src={randomFlags.rightFlagUrl} alt={"CLICK TO START THE GAME!"}/>
            </div>
        </>
    )
}

