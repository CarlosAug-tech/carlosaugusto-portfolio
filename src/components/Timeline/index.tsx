import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    FaBuilding,
    FaGraduationCap,
    FaHome,
    FaNetworkWired,
    FaSchool,
} from "react-icons/fa";
import { BoxIcon, BoxInformation, Container, Line, PointLine } from "./styles";

function Timeline() {
    const { t } = useTranslation();

    const timelineDesc2016 = t("timeline.2016");
    const timelineDesc2017 = t("timeline.2017");
    const timelineDesc2019 = t("timeline.2019");
    const timelineDesc2020 = t("timeline.2020");
    const timelineDesc2021 = t("timeline.2021");
    const timelineDesc2022 = t("timeline.2022");

    const [sectionCurrent, setSectionCurrent] = useState<Element>();
    const containerLineRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const optsTimeline = [
        {
            heightShow: 5,
        },
        {
            heightShow: 25,
        },
        {
            heightShow: 40,
        },
        {
            heightShow: 55,
        },
        {
            heightShow: 70,
        },
        {
            heightShow: 85,
        },
        // {
        //     heightShow: 95,
        // },
    ];

    useLayoutEffect(() => {
        const selectSectionCurrent = document.querySelector("#About");
        if (selectSectionCurrent) {
            setSectionCurrent(selectSectionCurrent);
        }
        if (lineRef.current) {
            lineRef.current.style.height = "0%";
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            if (containerLineRef.current) {
                                if (lineRef.current) {
                                    for (const [index, optLine] of Array.from(
                                        optsTimeline.entries()
                                    )) {
                                        if (
                                            Number(
                                                parseFloat(
                                                    lineRef.current.style.height
                                                ).toFixed(2)
                                            ) >= optLine.heightShow
                                        ) {
                                            if (lineRef.current) {
                                                lineRef.current.children[
                                                    index
                                                ].classList.add("active");
                                            }
                                        }
                                    }

                                    if (
                                        window.scrollY >
                                            lineRef.current.clientHeight &&
                                        Number(
                                            parseFloat(
                                                lineRef.current.style.height
                                            ).toFixed(2)
                                        ) < 100
                                    ) {
                                        lineRef.current.style.height = `${
                                            window.scrollY * 0.08 > 100
                                                ? 100
                                                : window.scrollY * 0.08
                                        }%`;
                                    }
                                }
                            }
                        }
                    });
                },
                {
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.2,
                }
            );

            if (sectionCurrent) {
                observer.observe(sectionCurrent);
            }

            return () => {
                if (sectionCurrent) {
                    observer.unobserve(sectionCurrent);
                }
            };
        });
    }, [sectionCurrent]);

    return (
        <Container ref={containerLineRef}>
            <Line ref={lineRef}>
                <PointLine>
                    <span>2016</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaGraduationCap />
                        </BoxIcon>
                        <p>{timelineDesc2016}</p>
                    </BoxInformation>
                </PointLine>
                <PointLine>
                    <span>2017</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaSchool />
                        </BoxIcon>
                        <p>{timelineDesc2017}</p>
                    </BoxInformation>
                </PointLine>
                <PointLine>
                    <span>2019</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaBuilding />
                        </BoxIcon>
                        <p>{timelineDesc2019}</p>
                    </BoxInformation>
                </PointLine>
                <PointLine>
                    <span>2020</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaHome />
                        </BoxIcon>
                        <p>{timelineDesc2020}</p>
                    </BoxInformation>
                </PointLine>
                <PointLine>
                    <span>2021</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaNetworkWired />
                        </BoxIcon>
                        <p>{timelineDesc2021}</p>
                    </BoxInformation>
                </PointLine>
                <PointLine>
                    <span>2022</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaNetworkWired />
                        </BoxIcon>
                        <p>{timelineDesc2022}</p>
                    </BoxInformation>
                </PointLine>
                {/* <PointLine>
                    <span>2017</span>
                    <BoxInformation>
                        <BoxIcon>
                            <FaGraduationCap />
                        </BoxIcon>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam quis massa ante. Donec fermentum
                            malesuada dictum. Praesent quis malesuada orci.
                            Phasellus posuere mauris et tortor mattis ornare.
                            Sed in laoreet nunc.
                        </p>
                    </BoxInformation>
                </PointLine> */}
            </Line>
        </Container>
    );
}

export { Timeline };
