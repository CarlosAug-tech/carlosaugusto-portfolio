import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { v4 } from "uuid";

import { Section } from "../../../../components/Section";
import {
    listSkill,
    SkillExperiencieType,
} from "../../../../utils/statics/list-skills-experiencies";
import { SkillInformationContent } from "./SkillInformationContent";

import { SkillContainer, SkillDescription, SkillList } from "./styles";

interface ISkillSection {
    skillsExperiencies: SkillExperiencieType[];
}

function SkillSection({ skillsExperiencies }: ISkillSection) {
    const { t } = useTranslation();

    const qualificationsTitle = t("qualifications.title");

    const [data, setData] =
        useState<SkillExperiencieType[]>(skillsExperiencies);
    const informationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (informationRef.current) {
            data.map((item, index) => {
                for (let i = 0; i < item.skills.length; i++) {
                    if (informationRef.current) {
                        for (let j = 0; j < item.skills[i].amountXP; j++) {
                            informationRef.current.children[
                                i
                            ].children[1].children[j].classList.add("active");
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <Section
            id="Skill"
            outContent={
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
                </svg>
            }
        >
            <h3>{qualificationsTitle}</h3>
            <SkillContainer>
                {skillsExperiencies.map((item) => (
                    <SkillList key={item.id}>
                        <SkillDescription>
                            <strong>{item.title}</strong>
                        </SkillDescription>
                        <SkillInformationContent item={item} />
                    </SkillList>
                ))}
            </SkillContainer>
        </Section>
    );
}

export { SkillSection };
