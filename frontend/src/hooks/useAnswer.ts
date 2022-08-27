import {useEffect, useState} from "react";
import axios from "axios";

import {NewAnswer} from "../components/NewAnswer";
import {Answer} from "../components/Answer";
import {WrongAnswer} from "../components/WrongAnswer";
import {NewWrongAnswer} from "../components/NewWrongAnswer";

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

        const newAnswer: NewAnswer = {answerContent: answer}
        return axios.post("/answer", newAnswer)
            .then(getAllAnswers)
    }

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

    return {answerContent, wrongAnswer, addAnswer, addWrongAnswer}
}
