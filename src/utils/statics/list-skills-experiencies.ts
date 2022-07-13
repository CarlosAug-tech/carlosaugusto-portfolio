import { v4 } from "uuid";

export type SkillType = {
    id: string;
    name: string;
    description: string;
    amountXP: number;
};

export type SkillExperiencieType = {
    id: string;
    title: string;
    skills: SkillType[];
};

const listSkill: SkillExperiencieType[] = [
    {
        id: v4(),
        title: "Dominio das linguagens de programação e tempo de experiencia",
        skills: [
            {
                id: v4(),
                name: "HTML",
                description: "3 Anos de experiencia",
                amountXP: 3,
            },
            {
                id: v4(),
                name: "CSS",
                description: "3 Anos de experiencia",
                amountXP: 3,
            },
            {
                id: v4(),
                name: "Javascript",
                description: "3 Anos de experiencia",
                amountXP: 3,
            },
            {
                id: v4(),
                name: "Typescript",
                description: "1 Ano de experiencia",
                amountXP: 1,
            },
            {
                id: v4(),
                name: "Node",
                description: "2 Anos de experiencia",
                amountXP: 2,
            },
            {
                id: v4(),
                name: "React",
                description: "2 Anos de experiencia",
                amountXP: 2,
            },
            {
                id: v4(),
                name: "React Native",
                description: "2 Anos de experiencia",
                amountXP: 2,
            },
        ],
    },
    {
        id: v4(),
        title: "Dominio de ORMS",
        skills: [
            {
                id: v4(),
                name: "Sequelize",
                description: "2 Anos de experiencia",
                amountXP: 2,
            },
            {
                id: v4(),
                name: "TypeORM",
                description: "1 Ano de experiencia",
                amountXP: 1,
            },
            {
                id: v4(),
                name: "Prisma",
                description: "1 Ano de experiencia",
                amountXP: 1,
            },
        ],
    },
    {
        id: v4(),
        title: "Estudo e prática de padrões, conceitos de projetos",
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

export { listSkill };
