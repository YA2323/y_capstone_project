import {Button} from "@mui/material";
import useFlags from "../hooks/useFlags";
import "../style/Game.css"

export default function Game() {

    const {randomFlags, getRandomEuroFlags} = useFlags()

    const handleNeu = () => {
        getRandomEuroFlags()
    }

    return (

        <>
            <Button id={"b1"}>{randomFlags.rightFlag}</Button>
            <Button id={"b2"}>{randomFlags.wrongFlagOne}</Button>
            <Button id={"b3"}>{randomFlags.wrongFlagTwo}</Button>
            <Button id={"b4"}>{randomFlags.wrongFlagThree}</Button>
            <Button id={"b0"} onClick={handleNeu}>NEXT FLAG</Button>
            <div className={"imgFlag"}>
                <img src={randomFlags.rightFlagUrl} alt={"CLICK TO START THE GAME!"}/>
            </div>
        </>
    )
}

