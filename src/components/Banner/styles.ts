import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerImage from "../../assets/images/banner_portfolio-10.png";

export const BannerContainer = styled.section`
    display: flex;
    align-items: center;
    min-height: 100vh;
    position: relative;
    background: url("${BannerImage}") no-repeat;
    background-size: cover;
    background-attachment: fixed;

    //transform: translateZ(-1px) scale(2);

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
    }
`;

export const BannerContent = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    padding: 20px 40px;
    margin: auto;

    > div {
        &:first-child {
            width: calc(100% - 400px);
        }
    }

    @media (max-width: 830px) {
        flex-direction: column;

        > div {
            &:first-child {
                width: 100%;
                margin-bottom: 40px;
            }
        }
    }
`;

export const BannerDescription = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    color: #fff;

    > h3 {
        font-size: 32px;
        font-family: "Shadows Into Light", cursive;
    }

    > p {
        font-family: "Monda";
    }
`;

export const BannerPerfil = styled.div`
    max-width: 350px;
    width: 100%;
    height: 500px;
    margin: 0 40px;
    position: relative;
    border: 20px solid #fff;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.3);
    transform: rotate(4deg);

    @media (max-width: 500px) {
        height: 400px;
    }
`;

export const ImagePerfil = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SocialsPerfil = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    bottom: -20px;
    position: absolute;
`;

export const SelfPerfil = styled.div`
    flex-grow: 1;
    text-align: center;
`;

export const SocialMedia = styled.div`
    margin-left: auto;
`;

export const SocialMediaLink = styled.a`
    color: #333;
    position: relative;

    & + a {
        margin-left: 5px;
    }

    &:hover {
        > div {
            visibility: visible;
            opacity: 1;
        }
    }
`;

export const TagInformation = styled.div`
    min-width: 80px;
    padding: 10px;
    top: 30px;
    left: 50%;
    position: absolute;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    text-align: center;
    background: #fff;
    transform: translateX(-50%);
    transition: all 0.4s ease;

    &::before {
        content: "";
        width: 0;
        top: -9px;
        left: 50%;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
        transform: translateX(-50%);
    }
`;

export const ButtonLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    left: 50%;
    bottom: 10px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #fff;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.4s ease;
    transform: translateX(-50%);

    &::after {
        content: "";
        width: 0;
        height: 2px;
        bottom: -1px;
        left: 50%;
        position: absolute;
        background: #d9d9d9;
        transform: translateX(-50%);
        transition: all 0.4s ease;
    }

    &:hover {
        color: #d9d9d9;

        /* &::after {
            width: 100%;
        } */

        /* > svg {
            right: -15px;
            visibility: visible;
            opacity: 1;
        } */
    }

    > svg {
        animation: animateArrow 1s infinite;
    }

    @keyframes animateArrow {
        0% {
            transform: translateY(-2px);
        }

        25% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(2px);
        }

        75% {
            transform: translateY(0px);
        }

        100% {
            transform: translateY(-2px);
        }
    }
`;
