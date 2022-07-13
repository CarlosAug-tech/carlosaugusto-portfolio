import React from "react";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";

import { Banner } from "../../components/Banner";
import { LanguageSelector } from "../../components/LanguageSelector";
import { SkillExperiencieType } from "../../utils/statics/list-skills-experiencies";
import { SectionAbout } from "./sections/About";
import { SectionContact } from "./sections/Contact";
import { PortfolioSection } from "./sections/Portfolio";
import { SkillSection } from "./sections/Skills";

import { Container } from "./styles";

function Home() {
    const { t } = useTranslation();

    const qualificationsLanguageTitle = t("qualifications.language.title");
    const qualificationsOrmTitle = t("qualifications.orm.title");
    const qualificationsConceptTitle = t("qualifications.concept.title");
    const qualificationsOneYearExperiencieTimeDesc = t(
        "qualifications.experiencie.time.one.year.description"
    );
    const qualificationsTwoYearExperiencieTimeDesc = t(
        "qualifications.experiencie.time.two.year.description"
    );
    const qualificationsThreeYearExperiencieTimeDesc = t(
        "qualifications.experiencie.time.three.year.description"
    );

    const listSkill: SkillExperiencieType[] = [
        {
            id: v4(),
            title: qualificationsLanguageTitle,
            skills: [
                {
                    id: v4(),
                    name: "HTML",
                    description: qualificationsThreeYearExperiencieTimeDesc,
                    amountXP: 3,
                },
                {
                    id: v4(),
                    name: "CSS",
                    description: qualificationsThreeYearExperiencieTimeDesc,
                    amountXP: 3,
                },
                {
                    id: v4(),
                    name: "Javascript",
                    description: qualificationsThreeYearExperiencieTimeDesc,
                    amountXP: 3,
                },
                {
                    id: v4(),
                    name: "Typescript",
                    description: qualificationsOneYearExperiencieTimeDesc,
                    amountXP: 1,
                },
                {
                    id: v4(),
                    name: "Node",
                    description: qualificationsTwoYearExperiencieTimeDesc,
                    amountXP: 2,
                },
                {
                    id: v4(),
                    name: "React",
                    description: qualificationsTwoYearExperiencieTimeDesc,
                    amountXP: 2,
                },
                {
                    id: v4(),
                    name: "React Native",
                    description: qualificationsTwoYearExperiencieTimeDesc,
                    amountXP: 2,
                },
            ],
        },
        {
            id: v4(),
            title: qualificationsOrmTitle,
            skills: [
                {
                    id: v4(),
                    name: "Sequelize",
                    description: qualificationsTwoYearExperiencieTimeDesc,
                    amountXP: 2,
                },
                {
                    id: v4(),
                    name: "TypeORM",
                    description: qualificationsOneYearExperiencieTimeDesc,
                    amountXP: 1,
                },
                {
                    id: v4(),
                    name: "Prisma",
                    description: qualificationsOneYearExperiencieTimeDesc,
                    amountXP: 1,
                },
            ],
        },
        {
            id: v4(),
            title: qualificationsConceptTitle,
            skills: [
                {
                    id: v4(),
                    name: "S.O.L.I.D",
                    description: "",
                    amountXP: 0,
                },
                {
                    id: v4(),
                    name: "Clean Architecture",
                    description: "",
                    amountXP: 0,
                },
                {
                    id: v4(),
                    name: "Clean Code",
                    description: "",
                    amountXP: 0,
                },
                {
                    id: v4(),
                    name: "Design Patterns",
                    description: "",
                    amountXP: 0,
                },
            ],
        },
    ];

    return (
        <Container>
            <Banner id="Home" />
            <SectionAbout />
            <PortfolioSection />
            <SkillSection skillsExperiencies={listSkill} />
            <SectionContact />
            <LanguageSelector />
        </Container>
    );
}

export { Home };
