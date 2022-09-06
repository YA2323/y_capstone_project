import {useState} from "react";
import axios from "axios";
import {Flags} from "../components/Flags";


export default function useFlags() {

    const [randomFlags, setRandomFlags] = useState<Flags>({
        "rightFlagUrl": "",
        "rightFlag": "",
        "wrongFlagOne": "",
        "wrongFlagTwo": "",
        "wrongFlagThree": ""
    })


    const getRandomEuroFlags = () => {
        axios.get("/flag/europe")
            .then((response) => response.data)
            .then(setRandomFlags)
    }

    return {randomFlags, getRandomEuroFlags}
}
