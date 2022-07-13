import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { languageSelector } from "../utils/translate";

export type LanguageTypes = "pt-BR" | "en";

interface ILanguageContextProps {
    languageCurrent: string;
    changeLanguage(language: LanguageTypes): void;
}

interface ILanguageProviderProps {
    children: React.ReactNode;
}

const LanguageContext = createContext({} as ILanguageContextProps);

function LanguageProvider({ children }: ILanguageProviderProps) {
    const [languageCurrent, setLanguageCurrent] = useState(() => {
        if (navigator.language !== "pt-BR" && navigator.language !== "en") {
            languageSelector("en");
            return "en";
        }

        languageSelector(navigator.language);

        return navigator.language;
    });

    useEffect(() => {
        languageSelector(languageCurrent);
    }, [languageCurrent]);

    const changeLanguage = useCallback((language: LanguageTypes) => {
        setLanguageCurrent(language);
    }, []);

    return (
        <LanguageContext.Provider value={{ languageCurrent, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

function useLanguage(): ILanguageContextProps {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("Context not provided");
    }

    return context;
}

export { LanguageProvider, useLanguage };
