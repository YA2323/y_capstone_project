import React, {useEffect} from 'react';
import './style/App.css';
import Header from "./components/Header";
import AllRoutes from "./components/AllRoutes";
import {HashRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";

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
            <ToastContainer/>
        </>
    );
}

export default App;
