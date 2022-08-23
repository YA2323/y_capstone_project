import {useState} from "react";
import {Button} from "@mui/material";

let x = 0
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

    const getRandomCountrie = () => {
        console.log("RANDOM IS : " + randomCountries[x] + "IN i STEHT : " + x)
        return randomCountries[x]
    }

    const handleClickBtn = () => {
        const url = "https://countryflagsapi.com/png/";
        setFlagURL(url + getRandomCountrie());
        x++
    }

    return (
        <>
            <div className={"btnFlag"}>
                <Button variant="contained" onClick={handleClickBtn}>Get Flag</Button>
            </div>
            <div className={"imgFlag"}>
                <img id={"imgFlag"} src={flagURL} alt={"flag"}/>
            </div>
        </>
    )
}