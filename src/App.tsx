import React from "react";
import { HashRouter } from "react-router-dom";

import { Routes } from "./routes";

import GlobalStyle from "./assets/styles/global";
import { AppProvider } from "./hooks";

function App() {
    return (
        <HashRouter>
            <AppProvider>
                <Routes />
            </AppProvider>
            <GlobalStyle />
        </HashRouter>
    );
}

export default App;
