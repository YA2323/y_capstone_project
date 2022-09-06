import React, {useEffect} from 'react';
import './style/App.css';
import Header from "./components/Header";
import AllRoutes from "./components/AllRoutes";
import {HashRouter} from "react-router-dom";

function App() {

    useEffect(() => {
        document.title = "GUESS THE FLAG"
    }, [])

    return (
        <>
            <HashRouter>
                <Header/>
                <AllRoutes/>
            </HashRouter>
        </>
    );
}

export default App;
