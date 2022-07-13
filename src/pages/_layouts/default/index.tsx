import React from "react";
import { Header } from "../../../components/Header";
import { SideMenu } from "../../../components/SideMenu";
import { MenuItems } from "../../../utils/statics/list-menu";
import { Container } from "./styles";

interface IDefaultProps {
    children: React.ReactNode;
}

function DefaultLayout({ children }: IDefaultProps) {
    return (
        <>
            {/* <Header listMenu={MenuItems} /> */}
            <Container>
                <SideMenu menuItems={MenuItems} />
                {children}
            </Container>
        </>
    );
}

export { DefaultLayout };
