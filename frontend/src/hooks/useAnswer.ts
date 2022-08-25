import {useEffect, useState} from "react";
import axios from "axios";

import {NewAnswer} from "../components/NewAnswer";
import {Answer} from "../components/Answer";

export default function useAnswer() {

    const [answerContent, setAnswerContent] = useState<Answer[]>([])

    useEffect(() => {
        getAllAnswers()
    }, [])

    const getAllAnswers = () => {
        axios.get("/answer")
            .then((response) => response.data)
            .then(setAnswerContent)
    }

    const addAnswer = (answer: string) => {

        const newAnswer : NewAnswer = {answerContent: answer}
        return axios.post("/answer", newAnswer)
            .then(getAllAnswers)
    }
    return {answerContent, addAnswer}
}