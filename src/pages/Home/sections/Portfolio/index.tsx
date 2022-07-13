import React from "react";
import { v4 } from "uuid";
import { useTranslation } from "react-i18next";
import { Carousel } from "../../../../components/Carousel";
import { Section } from "../../../../components/Section";

import { CarouselItemType } from "../../../../utils/statics/list-carousel";

import PolygonImg01 from "../../../../assets/images/polygon_background_01.png";
import PolygonImg02 from "../../../../assets/images/polygon_background_02.png";
import PolygonImg03 from "../../../../assets/images/polygon_background_03.png";
import PolygonImg04 from "../../../../assets/images/polygon_background_04.png";

const breakpoints = [
    {
        width: 1920,
        breakPoint: 3,
    },
    {
        width: 1200,
        breakPoint: 2,
    },
    {
        width: 600,
        breakPoint: 1,
    },
];

function PortfolioSection() {
    const { t } = useTranslation();

    const portfolioTitle = t("portfolio.title");

    const carouselDescriptionAuthNotify = t("carousel.description.auth.notify");
    const carouselDescriptionManagerProduct = t(
        "carousel.description.manager.product"
    );
    const carouselDescriptionVideoUpload = t(
        "carousel.description.video.upload"
    );
    const carouselDescriptionStepWizard = t("carousel.description.step.wizard");
    const carouselDescriptionFormValidation = t(
        "carousel.description.form.validation"
    );
    const carouselDescriptionCreditCard = t("carousel.description.credit.card");
    const carouselDescriptionDarkTheme = t("carousel.description.dark.theme");
    const carouselDescriptionDeezerProject = t(
        "carousel.description.deezer.project"
    );
    const carouselDescriptionReduxTypescript = t(
        "carousel.description.redux.typescript"
    );
    const carouselDescriptionMocksStubs = t("carousel.description.mocks.stubs");
    const carouselDescriptionChampionSearch = t(
        "carousel.description.champion.search"
    );
    const carouselDescriptionChampionSearchMobile = t(
        "carousel.description.champion.search.mobile"
    );

    const carouselData: CarouselItemType[] = [
        {
            id: v4(),
            title: "AuthNotify",
            description: carouselDescriptionAuthNotify,
            link: "https://github.com/CarlosAug-tech/authentication-web",
            image: {
                src: PolygonImg01,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "ManagerProduct",
            description: carouselDescriptionManagerProduct,
            link: "https://github.com/CarlosAug-tech/managerproduct-server",
            image: {
                src: PolygonImg02,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "VídeoUpload",
            description: carouselDescriptionVideoUpload,
            link: "https://github.com/CarlosAug-tech/videoupload-server",
            image: {
                src: PolygonImg03,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "StepWizard Component",
            description: carouselDescriptionStepWizard,
            link: "https://github.com/CarlosAug-tech/step-wizard-component",
            image: {
                src: PolygonImg04,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "Form Validation",
            description: carouselDescriptionFormValidation,
            link: "https://github.com/CarlosAug-tech/formvalidation-web",
            image: {
                src: PolygonImg02,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "CreditCard",
            description: carouselDescriptionCreditCard,
            link: "https://github.com/CarlosAug-tech/creditcard-example-web",
            image: {
                src: PolygonImg03,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "DarkTheme",
            description: carouselDescriptionDarkTheme,
            link: "https://github.com/CarlosAug-tech/dark-theme-reactjs",
            image: {
                src: PolygonImg01,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "Deezer Project",
            description: carouselDescriptionDeezerProject,
            link: "https://github.com/CarlosAug-tech/deezer-desafio",
            image: {
                src: PolygonImg04,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "Redux with TS",
            description: carouselDescriptionReduxTypescript,
            link: "https://github.com/CarlosAug-tech/redux-with-typescript",
            image: {
                src: PolygonImg03,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "Mock's and Stub's in NodeTS",
            description: carouselDescriptionMocksStubs,
            link: "https://github.com/CarlosAug-tech/learning_mock_and_stub_jest_test",
            image: {
                src: PolygonImg01,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "Champions Search",
            description: carouselDescriptionChampionSearch,
            link: "https://github.com/CarlosAug-tech/champions-search",
            image: {
                src: PolygonImg04,
                alt: "polygon_image",
            },
        },
        {
            id: v4(),
            title: "Champions Search Mobile",
            description: carouselDescriptionChampionSearchMobile,
            link: "https://github.com/CarlosAug-tech/champion-search-react-native",
            image: {
                src: PolygonImg02,
                alt: "polygon_image",
            },
        },
    ];

    return (
        <Section id="Portfolio" title={portfolioTitle}>
            <Carousel carouselData={carouselData} breakPoints={breakpoints} />
        </Section>
    );
}

export { PortfolioSection };
