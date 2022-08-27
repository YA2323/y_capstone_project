import React, {} from 'react';
import './style/App.css';
import Header from "./Pages/Header";
import AllRoutes from "./Pages/AllRoutes";
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
