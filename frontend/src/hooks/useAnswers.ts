import axios from "axios";
import {NewAnswer} from "../components/NewAnswer";
import {useEffect, useState} from "react";
import {Answer} from "../components/Answer";

export default function useAnswer() {

    const [answerTrueOrFalse, setAnswerTrueOrFalse] = useState<Answer[]>([])

    useEffect(() => {
        getAllAnswers()
    }, [])

    const getAllAnswers = () => {
        axios.get("/answer")
            .then((response) => response.data)
            .then(setAnswerTrueOrFalse)
    }

    const addAnswer = (answer: string) => {

        const newAnswer: NewAnswer = {answerTrueOrFalse: answer}
        return axios.post("/answer", newAnswer)
            .then(getAllAnswers)
    }

    return {addAnswer, answerTrueOrFalse}
}