import { v4 } from "uuid";

export type MenuProps = {
    id: string;
    title: string;
    url: string;
    hrefId: string;
    isActive?: boolean;
};

export const MenuItems: MenuProps[] = [
    {
        id: v4(),
        title: "Home",
        hrefId: "Home",
        url: "/",
    },
    {
        id: v4(),
        title: "About",
        hrefId: "About",
        url: "/about",
    },
    {
        id: v4(),
        title: "Portfolio",
        hrefId: "Portfolio",
        url: "/portfolio",
    },
    {
        id: v4(),
        title: "Qualificações",
        hrefId: "Skill",
        url: "/qualificacoes",
    },
    {
        id: v4(),
        title: "Contato",
        hrefId: "Contact",
        url: "/contato",
    },
];
