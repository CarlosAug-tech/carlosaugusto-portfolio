import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes";

import GlobalStyle from "./assets/styles/global";
import { AppProvider } from "./hooks";

function App() {
    return (
        <BrowserRouter>
            <AppProvider>
                <Routes />
            </AppProvider>
            <GlobalStyle />
        </BrowserRouter>
    );
}

export default App;
