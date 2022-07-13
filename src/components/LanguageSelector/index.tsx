import React, { useCallback, useEffect, useState } from "react";

import FlagBrazil from "../../assets/images/flag_brazil.png";
import FlagEnglish from "../../assets/images/flag_english.png";
import { LanguageTypes, useLanguage } from "../../hooks/language";

import { Container, LanguagenItems } from "./styles";

function LanguageSelector() {
    const [active, setIsActive] = useState<boolean>(false);
    const { languageCurrent, changeLanguage } = useLanguage();

    const handleActiveMenu = useCallback(() => {
        setIsActive(!active);
    }, [active]);

    const handleChangeLanguage = useCallback(
        (langue: LanguageTypes) => {
            changeLanguage(langue);
            setIsActive(!active);
        },
        [active]
    );

    return (
        <Container isActive={active}>
            <button type="button" onClick={handleActiveMenu}>
                <img
                    src={languageCurrent === "pt-BR" ? FlagBrazil : FlagEnglish}
                    alt=""
                />
            </button>
            <LanguagenItems>
                <button
                    type="button"
                    onClick={() => handleChangeLanguage("pt-BR")}
                >
                    <img src={FlagBrazil} alt="" />
                </button>
                <button
                    type="button"
                    onClick={() => handleChangeLanguage("en")}
                >
                    <img src={FlagEnglish} alt="" />
                </button>
            </LanguagenItems>
        </Container>
    );
}

export { LanguageSelector };
