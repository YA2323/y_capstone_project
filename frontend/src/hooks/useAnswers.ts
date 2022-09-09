import axios from "axios";
import {NewAnswer} from "../components/NewAnswer";
import {useEffect, useState} from "react";
import {Answer} from "../components/Answer";
import {toast} from "react-toastify";

export default function useAnswer() {

    const [answerAndPoints, setAnswerAndPoints] = useState<Answer[]>([])

    useEffect(() => {
        getAllAnswers()
    }, [])

    const onErrorFunction = (error: Error) => {
        toast.error(error.message, {
                position: toast.POSITION.TOP_LEFT
            }
        )
    }

    const getAllAnswers = () => {
        axios.get("/answer")
            .then((response) => response.data)
            .then(setAnswerAndPoints)
    }

    const addAnswer = (answer: string, points : string) => {

        const newAnswer: NewAnswer = {answerTrueOrFalse: answer, points : points}
        return axios.post("/answer", newAnswer)
            .then(getAllAnswers)
    }

    const deleteAllAnswers = (id: string) => {
        return axios.delete(`/answer/${id}`)
            .then(getAllAnswers)
            .catch(
                error => {
                    onErrorFunction(error)
                })
    }


    /*
    const deleteAllAnswers = () => {
        axios.delete("/answer")
            .then(getAllAnswers)
    }


     */
    return {addAnswer, answerAndPoints, deleteAllAnswers}
}