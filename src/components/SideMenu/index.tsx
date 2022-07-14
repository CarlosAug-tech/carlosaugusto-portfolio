import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";
import { FaCircle } from "react-icons/fa";

import { MenuProps } from "../../utils/statics/list-menu";

import { Container, SideMenuButton } from "./styles";

interface ISideMenuProps {
    menuItems: MenuProps[];
}

function SideMenu({ menuItems }: ISideMenuProps) {
    const [data, setData] = useState(menuItems);
    const [sectionsElements, setSectionsElement] =
        useState<NodeListOf<Element>>();

    useLayoutEffect(() => {
        setData((state) =>
            state.map((item, index) =>
                index === 0
                    ? { ...item, isActive: true }
                    : { ...item, isActive: false }
            )
        );

        setSectionsElement(document.querySelectorAll("section"));
    }, []);

    const changeObserver = useCallback(
        (threshold = 0.6) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            if (sectionsElements) {
                                setData((state) =>
                                    state.map((item, i) =>
                                        Array.from(sectionsElements).indexOf(
                                            entry.target
                                        ) === i
                                            ? { ...state[i], isActive: true }
                                            : { ...item, isActive: false }
                                    )
                                );
                            }
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold,
                }
            );

            if (sectionsElements) {
                sectionsElements.forEach((element) => {
                    observer.observe(element);
                });
            }
        },
        [sectionsElements]
    );

    useEffect(() => {
        changeObserver();
    }, [sectionsElements]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 500) {
                changeObserver(0.1);
            } else {
                changeObserver();
            }
        });

        return () => window.removeEventListener("resize", () => {});
    }, []);

    return (
        <Container>
            {data.map((item) => (
                <SideMenuButton key={item.hrefId} isActive={item.isActive}>
                    <FaCircle />
                </SideMenuButton>
            ))}
        </Container>
    );
}

export { SideMenu };
