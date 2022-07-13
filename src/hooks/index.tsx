import React from "react";
import { LanguageProvider } from "./language";
import { ToastProvider } from "./toast";

interface IAppProviderProps {
    children: React.ReactNode;
}

function AppProvider({ children }: IAppProviderProps) {
    return (
        <LanguageProvider>
            <ToastProvider>{children}</ToastProvider>
        </LanguageProvider>
    );
}

export { AppProvider };
