import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { SkillExperiencieType } from "../../../../../utils/statics/list-skills-experiencies";
import {
    SkillCard,
    SkillExperienceStar,
    SkillExperiencie,
    SkillHexagon,
    SkillInformation,
} from "../styles";

interface ISkillInformationContent {
    item: SkillExperiencieType;
}

function SkillInformationContent({ item }: ISkillInformationContent) {
    const informationRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        for (let i = 0; i < item.skills.length; i++) {
            if (informationRef.current) {
                for (let j = 0; j < item.skills[i].amountXP; j++) {
                    informationRef.current.children[i].children[1].children[
                        j
                    ].classList.add("active");
                }
            }
        }
    }, []);

    return (
        <SkillInformation ref={informationRef}>
            {item.skills.map((skill) => (
                <SkillCard key={skill.id}>
                    <SkillHexagon>
                        <h4>{skill.name}</h4>
                        <p>{skill.description}</p>
                    </SkillHexagon>
                    {skill.amountXP !== 0 && (
                        <SkillExperiencie>
                            <SkillExperienceStar>
                                <FaStar />
                            </SkillExperienceStar>
                            <SkillExperienceStar>
                                <FaStar />
                            </SkillExperienceStar>
                            <SkillExperienceStar>
                                <FaStar />
                            </SkillExperienceStar>
                            <SkillExperienceStar>
                                <FaStar />
                            </SkillExperienceStar>
                            <SkillExperienceStar>
                                <FaStar />
                            </SkillExperienceStar>
                        </SkillExperiencie>
                    )}
                </SkillCard>
            ))}
        </SkillInformation>
    );
}

export { SkillInformationContent };
