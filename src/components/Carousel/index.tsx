import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { useTranslation } from "react-i18next";
import { FaCircle } from "react-icons/fa";
import { useLanguage } from "../../hooks/language";
import { CarouselItemType } from "../../utils/statics/list-carousel";
import {
    ButtonPointCarousel,
    CardCarousel,
    CardCarouselContainer,
    Container,
    Content,
    LinkRepository,
    PointsCarousel,
} from "./styles";

type BreakPointsType = {
    width: number;
    breakPoint: number;
};

interface ICarouselProps {
    carouselData: any[];
    breakPoints: BreakPointsType[];
}

function Carousel({ carouselData, breakPoints }: ICarouselProps) {
    const { t } = useTranslation();

    const carouselAccessRepositoryLink = t("carousel.access.repository.link");

    const { languageCurrent } = useLanguage();

    const contentRef = useRef<HTMLDivElement>(null);
    const [data, setData] = useState<any[]>([]);
    const [amountPoints, setAmountPoints] = useState(0);
    const [amountPointsArray, setAmountPointsArray] = useState<number[]>([]);
    const [currentCarousel, setCurrentCarousel] = useState(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    const loadCarouselBreakPoints = useCallback(() => {
        for (let i = 0; i < breakPoints.length; i++) {
            if (
                window.innerWidth <= breakPoints[i].width &&
                window.innerWidth >
                    (i === breakPoints.length - 1
                        ? 0
                        : breakPoints[i + 1].width)
            ) {
                let j = 0;
                const arrSlice: any[] = [];
                while (j < carouselData.length) {
                    arrSlice.push(
                        carouselData.slice(j, (j += breakPoints[i].breakPoint))
                    );
                }

                setData(arrSlice);
                setAmountPoints(
                    Math.round(carouselData.length / breakPoints[i].breakPoint)
                );
            }
        }
    }, [languageCurrent, carouselData]);

    useEffect(() => {
        loadCarouselBreakPoints();
    }, []);

    useEffect(() => {
        loadCarouselBreakPoints();
    }, [languageCurrent, carouselData]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            loadCarouselBreakPoints();
        });

        return () => window.removeEventListener("resize", () => {});
    }, []);

    useEffect(() => {
        if (amountPoints !== 0) {
            const amountPointsNewArr: any[] = [];
            for (let i = 0; i < amountPoints; i++) {
                amountPointsNewArr.push(i);
            }

            setAmountPointsArray(amountPointsNewArr);
        }
    }, [amountPoints]);

    const handleCarousel = useCallback((index: number) => {
        setCurrentCarousel(index);
    }, []);

    const handleTouchStartCarousel = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            const touchDown = e.touches[0].clientX;
            setTouchPosition(touchDown);
        },
        []
    );

    const handleTouchCarouselNext = useCallback(
        (e: React.TouchEvent<HTMLDivElement>) => {
            const touchDown = touchPosition;

            if (touchDown === null) {
                return;
            }

            const currentTouch = e.touches[0].clientX;
            const diff = touchDown - currentTouch;

            if (diff > 5) {
                if (currentCarousel === amountPointsArray.length - 1) {
                    return;
                }

                setCurrentCarousel(currentCarousel + 1);
            }

            if (diff < -5) {
                if (currentCarousel === 0) {
                    return;
                }

                setCurrentCarousel(currentCarousel - 1);
            }

            setTouchPosition(null);
        },
        [touchPosition]
    );

    useEffect(() => {
        if (currentCarousel > data.length - 1) {
            setCurrentCarousel(0);
        }
    }, [currentCarousel, data]);

    return (
        <Container>
            <Content
                ref={contentRef}
                onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => {
                    handleTouchCarouselNext(e);
                }}
                onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
                    handleTouchStartCarousel(e);
                }}
            >
                {data.length > 0 &&
                    data.map((item, index) => (
                        <CardCarouselContainer
                            key={index}
                            isActive={index === currentCarousel}
                            isActiveReversed={index < currentCarousel}
                        >
                            {item.map((i: CarouselItemType) => (
                                <CardCarousel key={i.id}>
                                    <img src={i.image.src} alt="" />
                                    <h4>{i.title}</h4>
                                    <p>{i.description}</p>
                                    <LinkRepository
                                        href={i.link}
                                        target="_blank"
                                    >
                                        {carouselAccessRepositoryLink}
                                    </LinkRepository>
                                </CardCarousel>
                            ))}
                        </CardCarouselContainer>
                    ))}
            </Content>
            <PointsCarousel>
                {amountPointsArray.length > 0 &&
                    amountPointsArray.map((points, index) => (
                        <ButtonPointCarousel
                            key={points}
                            onClick={() => handleCarousel(index)}
                            isActive={index === currentCarousel}
                        >
                            <FaCircle />
                        </ButtonPointCarousel>
                    ))}
            </PointsCarousel>
        </Container>
    );
}

export { Carousel };
