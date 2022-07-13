import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ptBR from "./languagens/pt.json";
import en from "./languagens/en.json";

const resources = {
    "pt-BR": ptBR,
    en,
};

const languageSelector = (languageCurrent: string) => {
    i18n.use(initReactI18next).init({
        resources,
        lng: languageCurrent,
        interpolation: {
            escapeValue: false,
        },
    });
};

export { languageSelector };
