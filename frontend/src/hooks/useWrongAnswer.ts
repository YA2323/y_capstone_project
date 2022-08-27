import {useEffect, useState} from "react";
import axios from "axios";
import {WrongAnswer} from "../components/WrongAnswer";
import {NewWrongAnswer} from "../components/NewWrongAnswer";

export default function useWrongAnswer() {

    const [wrongAnswer, setWrongAnswer] = useState<WrongAnswer[]>([])

    useEffect(() => {
        getAllWrongAnswers()
    }, [])

    const getAllWrongAnswers = () => {
        axios.get("/answer/wrong")
            .then((response) => response.data)
            .then(setWrongAnswer)
    }

    const addWrongAnswer = (wrAnswer: string) => {

        const newWrongAnswer: NewWrongAnswer = {wrongAnswer: wrAnswer}
        return axios.post("/answer/wrong", newWrongAnswer)
            .then(getAllWrongAnswers)
    }
    return {wrongAnswer, addWrongAnswer}
}
