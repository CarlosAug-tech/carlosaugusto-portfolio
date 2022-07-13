import i18next from "i18next";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
    FaArrowDown,
    FaChevronDown,
    FaChevronRight,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import PerfilImage from "../../assets/images/perfil_image.jpg";

import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerPerfil,
    ButtonLink,
    ImagePerfil,
    SelfPerfil,
    SocialMedia,
    SocialMediaLink,
    SocialsPerfil,
    TagInformation,
} from "./styles";

interface IBannerProps {
    id: "home" | string;
}

function Banner({ id }: IBannerProps) {
    const { t } = useTranslation();

    const bannerTitle = t("banner.title");

    return (
        <BannerContainer id={id}>
            <BannerContent>
                <BannerDescription>
                    <h3>{bannerTitle}</h3>
                    <p>
                        Venha conhecer meus trabalhos, sou desenvolvedor em
                        React e React Native na parte do Front-end, mas também
                        posso dar aquela mãozinha na parte do Back-end com o
                        Node.
                    </p>
                </BannerDescription>
                <BannerPerfil>
                    <ImagePerfil alt="Carlos Augusto - Perfil" />
                    <SocialsPerfil>
                        <SelfPerfil>
                            <h4>Carlos Augusto</h4>
                        </SelfPerfil>
                        <SocialMedia>
                            <SocialMediaLink
                                href="https://www.linkedin.com/in/carlos-augusto-686434208/"
                                target="_blank"
                            >
                                <FaLinkedin color="#0e76a8 " />
                                <TagInformation>
                                    <span>Linkedin</span>
                                </TagInformation>
                            </SocialMediaLink>
                            <SocialMediaLink
                                href="https://github.com/CarlosAug-tech"
                                target="_blank"
                            >
                                <FaGithub color="#171515" />
                                <TagInformation>
                                    <span>Github</span>
                                </TagInformation>
                            </SocialMediaLink>
                            <SocialMediaLink
                                href="mailto:carlosaugust.contact@gmail.com"
                                target="_blank"
                            >
                                <FaEnvelope color="#db4a39" />
                                <TagInformation>
                                    <span>Gmail</span>
                                </TagInformation>
                            </SocialMediaLink>
                        </SocialMedia>
                    </SocialsPerfil>
                </BannerPerfil>
            </BannerContent>
            <ButtonLink href="#About">
                <FaArrowDown />
            </ButtonLink>
        </BannerContainer>
    );
}

export { Banner };
