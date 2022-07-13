import React from "react";
import { useTranslation } from "react-i18next";
import { Section } from "../../../../components/Section";
import { Timeline } from "../../../../components/Timeline";
import { AboutContainer } from "./styles";

function SectionAbout() {
    const { t } = useTranslation();

    const aboutDescription = t("about.description");
    const aboutTitle = t("about.title");

    return (
        <Section id="About" title={aboutTitle}>
            <AboutContainer>
                <p>{aboutDescription}</p>
                <Timeline />
            </AboutContainer>
        </Section>
    );
}

export { SectionAbout };
