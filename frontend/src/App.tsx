import React, {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

    const [message, setMessage] = useState();

    axios.get("/hello")
        .then((response) => response.data)
        .then(setMessage)

    return (
        <>
            <h1>Hallo Frontend</h1>
            <h2>{message}</h2>
        </>
    );
}

export default App;
