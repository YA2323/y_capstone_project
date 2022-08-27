import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";

type RandomFlagProps = {
    addAnswer: (answer: string) => Promise<void>
    addWrongAnswer: (wrongAnswer: string) => Promise<void>
}

const countries: string[] = ["usa", "cameroon", "Albania", "Andorra", "Austria",
    "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czechia",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Gibraltar", "Greece"]

const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

const randomCountries = shuffle(countries)

export default function RandomFlag(props: RandomFlagProps) {

    const [flagURL, setFlagURL] = useState("https://countryflagsapi.com/png/" + randomCountries[0])

    const handleClickBtnFlag = () => {
        const url = "https://countryflagsapi.com/png/";
        setFlagURL(url + randomCountries[1]);

        const index = randomCountries.indexOf(randomCountries[0])
        if (index > -1) {
            randomCountries.splice(index, 1)
            setAnswer(randomCountries[0])
        }
    }

    const [answer, setAnswer] = useState<string>(randomCountries[0])

    const wrongAnswer = "Wrong Answer!"

    const handleSubmitTrue = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.addAnswer(answer + " - Right Answer!")
            .then(() => setAnswer(randomCountries[0]))
    }

    const handleChangeTrue = (event: ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value)
    }

    const handleSubmitFalse = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.addWrongAnswer(wrongAnswer)

    }

    return (
        <>
            <div className={"btnFlag"}>
                <Button variant="contained" onClick={handleClickBtnFlag}>Next Flag</Button>
            </div>

            <form onSubmit={handleSubmitTrue}>
                <div className={"answerBtns"}>
                    <button value={answer} onChange={() => handleChangeTrue}
                            type={"submit"}>{randomCountries[0]}</button>
                </div>
            </form>

            <form onSubmit={handleSubmitFalse}>
                <div className={"answerBtns"}>
                    <button>{randomCountries[4]}</button>
                    <button>{randomCountries[8]}</button>
                    <button>{randomCountries[10]}</button>
                </div>
            </form>

            <div className={"imgFlag"}>
                <img src={flagURL} alt={"flag"}/>
            </div>
        </>
    )
}
