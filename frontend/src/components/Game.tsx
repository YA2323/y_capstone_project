import {Button} from "@mui/material";
import useFlags from "../hooks/useFlags";
import "../style/Game.css"
import {useEffect, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {useLocation} from "react-router-dom";
import {toast} from "react-toastify";

type GameProps = {
    addAnswer: (answer: string, points: string) => Promise<void>
}

export default function Game(props: GameProps) {

    const {randomFlags, getRandomEuroFlags, getRandomAsianFlags, getRandomAfricanFlags} = useFlags()
    const [randomShuffledFlags, setRandomShuffledFlags] = useState<string[]>([])

    const [actualPoints, setActualPoints] = useState(0)
    const [possiblePoints, setPossiblePoints] = useState(0)
    const [startButtonText, setStartButtonText] = useState("START")
    const [showAnswerBtn, setShowAnswerBtn] = useState(false)
    const [answerBtnDisabled, setAnswerBtnDisabled] = useState(false)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(false)

    const location = useLocation();


    useEffect(() => {
        const flagAnswers: string[] = [randomFlags.rightFlag, randomFlags.wrongFlagOne, randomFlags.wrongFlagTwo, randomFlags.wrongFlagThree]
        const shuffledFlags = shuffle(flagAnswers)
        setRandomShuffledFlags(shuffledFlags)
    }, [randomFlags])


    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }

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

    const handleAnswerB1Click = () => {
        if (randomShuffledFlags.at(0) === randomFlags.rightFlag) {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(0) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)

        } else {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(0) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setAnswerBtnDisabled(true)
        setNextBtnDisabled(false)
    }

    const handleAnswerB2Click = () => {
        if (randomShuffledFlags.at(1) === randomFlags.rightFlag) {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(1) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)
        } else {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(1) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setAnswerBtnDisabled(true)
        setNextBtnDisabled(false)
    }

    const handleAnswerB3Click = () => {
        if (randomShuffledFlags.at(2) === randomFlags.rightFlag) {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(2) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)
        } else {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(2) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setAnswerBtnDisabled(true)
        setNextBtnDisabled(false)
    }

    const handleAnswerB4Click = () => {
        if (randomShuffledFlags.at(3) === randomFlags.rightFlag) {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(3) + " - RIGHT ANSWER!  ", "  + 5 Points")
                .then(notifyTrue)
            setActualPoints(actualPoints + 5)
            setPossiblePoints(possiblePoints + 5)
        } else {
            props.addAnswer("FLAG : " + randomFlags.rightFlag + " - YOUR ANSWER : " + randomShuffledFlags.at(3) + " - WRONG ANSWER!  ", "  0 Points")
                .then(notifyFalse)
            setPossiblePoints(possiblePoints + 5)
        }
        setAnswerBtnDisabled(true)
        setNextBtnDisabled(false)
    }


    const handleNextFlag = () => {
        if (location.pathname === "/game/europe") {
            getRandomEuroFlags()
        } else if (location.pathname === "/game/asia") {
            getRandomAsianFlags()
        }
        else if (location.pathname === "/game/africa"){
            getRandomAfricanFlags()
        }
        setStartButtonText("NEXT FLAG")
        setShowAnswerBtn(true)
        setAnswerBtnDisabled(false)
        setNextBtnDisabled(true)
    }

    return (

        <>
            <div id={"points"}>Points : {actualPoints} / {possiblePoints}</div>
            {showAnswerBtn && (
                <div>
                    <Button disabled={answerBtnDisabled} onClick={handleAnswerB1Click}
                            id={"b1"}>{randomShuffledFlags.at(0)}</Button>
                    <Button disabled={answerBtnDisabled} onClick={handleAnswerB2Click}
                            id={"b2"}>{randomShuffledFlags.at(1)}</Button>
                    <Button disabled={answerBtnDisabled} onClick={handleAnswerB3Click}
                            id={"b3"}>{randomShuffledFlags.at(2)}</Button>
                    <Button disabled={answerBtnDisabled} onClick={handleAnswerB4Click}
                            id={"b4"}>{randomShuffledFlags.at(3)}</Button>
                </div>
            )}
            <Button disabled={nextBtnDisabled} onClick={handleNextFlag} id={"b0"}>{startButtonText}</Button>
            <div className={"imgFlag"}>
                <img src={randomFlags.rightFlagUrl} alt={""}/>
            </div>
        </>
    )
}

