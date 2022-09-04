import React, {} from 'react';
import './style/App.css';
import Header from "./components/Header";
import AllRoutes from "./components/AllRoutes";
import {HashRouter} from "react-router-dom";

function App() {

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
