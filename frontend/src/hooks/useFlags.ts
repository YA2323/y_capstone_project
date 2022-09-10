import {useState} from "react";
import axios from "axios";
import {Flags} from "../components/Flags";
import {toast} from "react-toastify";


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

    const getRandomAsianFlags = () => {
        axios.get("/flag/asia")
            .then((response) => response.data)
            .then(setRandomFlags)
    }

    const shuffle = ([...arr]) => {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }

    const notifyTrue = () => {
        toast.success('Good Job!     + 5 Points', {
            theme: "colored",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const notifyFalse = () => {
        toast.error('Sorry, wrong Answer!     0 Points', {
            theme: "colored",
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return {randomFlags, getRandomEuroFlags,getRandomAsianFlags,shuffle, notifyTrue, notifyFalse}
}
