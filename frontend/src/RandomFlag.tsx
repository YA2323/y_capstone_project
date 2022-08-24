import {useState} from "react";
import {Button} from "@mui/material";


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

export default function RandomFlag() {

    const [flagURL, setFlagURL] = useState("https://countryflagsapi.com/png/")

    const handleClickBtn = () => {
        const url = "https://countryflagsapi.com/png/";
        setFlagURL(url + randomCountries[1]);

        const index = randomCountries.indexOf(randomCountries[0])
        if (index > -1) {
            randomCountries.splice(index,1)
        }
    }

    return (
        <>
            <div className={"btnFlag"}>
                <Button variant="contained" onClick={handleClickBtn}>Next Flag</Button>
            </div>

            <div className={"answerBtns"}>
                <button>{randomCountries[0]}</button>
                <button>{randomCountries[4]}</button>
                <button>{randomCountries[8]}</button>
                <button>{randomCountries[10]}</button>
            </div>

            <div className={"imgFlag"}>
                <img src={flagURL} alt={"flag"}/>
            </div>
        </>
    )
}