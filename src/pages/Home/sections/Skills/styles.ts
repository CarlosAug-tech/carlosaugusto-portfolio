import styled from "styled-components";

export const SkillContainer = styled.div`
    //display: flex;
    //align-items: center;
    //justify-content: center;
    //flex-wrap: wrap;
    height: 100%;
    margin-top: 40px;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`;

export const SkillList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 750px) {
        &:last-child {
            > div:nth-child(2) {
                > div {
                    margin: 40px 10px;
                }
            }
        }
    }
`;

export const SkillDescription = styled.div`
    text-align: center;
    > strong {
        font-size: 16px;
    }
`;

export const SkillInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px 0;
`;

export const SkillCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px 10px;

    /* & + div {
        margin-left: 20px;
    } */

    @media (max-width: 570px) {
        margin: 20px 10px;
    }
`;

export const SkillHexagon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 140px;
    height: 80px;
    margin-top: 30px;
    position: relative;
    color: #fff;
    background-color: #1064ae;

    &::before {
        content: " ";
        width: 0;
        height: 0;
        border-bottom: 40px solid #1064ae;
        border-left: 70px solid transparent;
        border-right: 70px solid transparent;
        position: absolute;
        top: -40px;
    }

    &::after {
        content: "";
        width: 0;
        position: absolute;
        bottom: -40px;
        border-top: 40px solid #1064ae;
        border-left: 70px solid transparent;
        border-right: 70px solid transparent;
    }

    > h4 {
        font-size: 16px;
    }

    > p {
        margin-top: 3px;
        text-align: center;
        font-size: 12px;
    }
`;

export const SkillExperiencie = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`;

export const SkillExperienceStar = styled.div`
    overflow: hidden;
    position: relative;

    & + div {
        margin-left: 3px;
    }
    /* 
    &::before {
        content: "";
        width: 200%;
        height: 200%;
        top: -110%;
        left: -210%;
        position: absolute;
        opacity: 0;
        transform: rotate(30deg);
        background: rgba(255, 255, 255, 0.13);
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.13) 0%,
            rgba(255, 255, 255, 0.13) 77%,
            rgba(255, 255, 255, 0.5) 92%,
            rgba(255, 255, 255, 0) 100%
        );
        animation: animateShine 3s ease-in-out infinite;
        animation-fill-mode: forwards;
    } */

    &.active {
        > svg {
            color: #daa520;
        }
    }

    /* @keyframes animateShine {
        10% {
            opacity: 1;
            top: -30%;
            left: -30%;
            transition-property: left, top, opacity;
            transition-duration: 1.3s, 1.3s, 0.15s;
            transition-timing-function: ease;
        }
        100% {
            opacity: 0;
            top: -30%;
            left: -30%;
            transition-property: left, top, opacity;
        }
    } */
`;
