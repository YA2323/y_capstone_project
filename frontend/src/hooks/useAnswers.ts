import axios from "axios";
import {NewAnswer} from "../components/NewAnswer";
import {useEffect, useState} from "react";
import {Answer} from "../components/Answer";
import {toast} from "react-toastify";

export default function useAnswer() {

    const [answerTrueOrFalse, setAnswerTrueOrFalse] = useState<Answer[]>([])

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
            .then(setAnswerTrueOrFalse)
    }

    const addAnswer = (answer: string) => {

        const newAnswer: NewAnswer = {answerTrueOrFalse: answer}
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

    return {addAnswer, answerTrueOrFalse, deleteAllAnswers}
}