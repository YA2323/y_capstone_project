import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "@mui/material";

type RandomFlagProps = {
    addAnswer: (answer: string) => Promise<void>
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

    const [flagURL, setFlagURL] = useState("https://countryflagsapi.com/png/")

    const handleClickBtn = () => {
        const url = "https://countryflagsapi.com/png/";
        setFlagURL(url + randomCountries[1]);

        const index = randomCountries.indexOf(randomCountries[0])
        if (index > -1) {
            randomCountries.splice(index, 1)
            setAnswer(randomCountries[0])
        }
    }

    const [answer, setAnswer] = useState<string>("")

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.addAnswer(answer)
            .then(() => setAnswer(randomCountries[0]))
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value)
    }

    return (
        <>
            <div className={"btnFlag"}>
                <Button variant="contained" onClick={handleClickBtn}>Next Flag</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={"answerBtns"}>
                    <button value={answer} onChange={() => handleChange} type={"submit"}>{randomCountries[0]}</button>
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
