import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MenuProps } from "../../utils/statics/list-menu";

import {
    HeaderElement,
    ListElement,
    ListItem,
    ListLink,
    LogoContainer,
    NavElement,
} from "./styles";

interface IHeaderProps {
    listMenu: MenuProps[];
}

function Header({ listMenu }: IHeaderProps) {
    const [data, setData] = useState<MenuProps[]>(listMenu);
    const location = useLocation();

    useLayoutEffect(() => {
        setData((state) =>
            state.map((item) => item && { ...item, isActive: false })
        );
    }, []);

    useEffect(() => {
        setData((state) =>
            state.map((item) =>
                item.url === location.pathname
                    ? { ...item, isActive: true }
                    : { ...item, isActive: false }
            )
        );
    }, [location.pathname]);

    return (
        <HeaderElement>
            <NavElement>
                <LogoContainer>
                    <Link to="/">
                        <h3>CarlosAugust Tech</h3>
                        <span>Developer Full-Stack</span>
                    </Link>
                </LogoContainer>
                <ListElement>
                    {data.map((item) => (
                        <ListItem key={item.id}>
                            <ListLink href={`#${item.hrefId}`}>
                                {item.title}
                            </ListLink>
                        </ListItem>
                    ))}
                </ListElement>
            </NavElement>
        </HeaderElement>
    );
}

export { Header };
