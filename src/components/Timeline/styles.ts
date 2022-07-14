import styled from "styled-components";

export const Container = styled.div`
    height: 1000px;
    position: relative;

    @media (max-width: 900px) {
        align-self: flex-start;
        padding-left: 40px;
    }

    @media (max-width: 480px) {
        padding-left: 20px;
    }
`;

export const Line = styled.div`
    width: 2px;
    height: 1%;
    background: #333;
    position: relative;
    transition: all 0.8s ease;
`;

export const PointLine = styled.div`
    width: 0;
    height: 2px;
    top: 5%;
    position: absolute;
    background: #333;
    transition: all 0.4s ease;

    > span {
        top: -8px;
        position: absolute;
        visibility: hidden;
        opacity: 0;
        font-size: 16px;
        font-weight: 700;
        font-family: "Courgette", cursive;
        transition: all 0.4s ease;
    }

    &::before {
        content: "";
        width: 0px;
        height: 0px;
        top: -25px;
        position: absolute;
        //border-radius: 50%;
        //border: 2px solid #333;
        background: #f5f5f5;
        transition: all 0.4s ease;
    }

    &.active {
        width: 70px;

        > span {
            visibility: visible;
            opacity: 1;
        }

        > div {
            visibility: visible;
        }

        &::before {
            content: "";
            width: 15px;
            height: 15px;
            top: -10px;
            position: absolute;
            border-radius: 50%;
            border: 2px solid #333;
            background: #f5f5f5;
        }

        &:nth-child(even) {
            > span {
                left: -50px;
            }
        }

        &:nth-child(odd) {
            > span {
                right: -50px;
            }
        }
    }

    &:nth-child(even) {
        > span {
            left: 0;
        }

        > div {
            right: -350px;
        }

        &::before {
            left: -7.5px;
        }
    }

    &:nth-child(odd) {
        right: 0;

        > span {
            right: 0;
        }

        > div {
            flex-direction: row-reverse;
            left: -350px;
        }

        &::before {
            right: -7.5px;
        }
    }

    &:nth-child(2) {
        top: 20%;
    }

    &:nth-child(3) {
        top: 35%;
    }

    &:nth-child(4) {
        top: 50%;
    }

    &:nth-child(5) {
        top: 65%;
    }

    &:nth-child(6) {
        top: 80%;
    }

    &:nth-child(7) {
        top: 95%;
    }

    @media (max-width: 900px) {
        &.active {
            &:nth-child(odd) {
                > span {
                    left: -50px;
                }
            }
        }

        &:nth-child(odd) {
            right: unset;

            &::before {
                right: unset;
                left: -7.5px;
            }

            > div {
                flex-direction: unset;
                left: unset;
                right: -350px;
            }
        }
    }

    @media (max-width: 480px) {
        &.active {
            width: 40px;
        }

        > span {
            font-size: 12px;
            left: -40px !important;
        }
    }
`;

export const BoxInformation = styled.div`
    display: flex;
    align-items: center;
    width: 350px;
    min-height: 90px;
    top: -45px;
    padding: 10px;
    position: absolute;
    border-radius: 8px;
    visibility: hidden;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);
    transition: all 1.5s ease;

    > p {
        width: calc(100% - 70px);
        margin: 0 10px;
        font-size: 12px;
    }

    @media (max-width: 570px) {
        width: 300px;
        right: -300px !important;
    }

    @media (max-width: 480px) {
        flex-direction: column !important;
        width: 250px;
        top: -42px;
        right: -250px !important;

        > p {
            font-size: 10px;
            width: 100%;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3; /* number of lines to show */
            line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    @media (max-width: 380px) {
        flex-direction: column !important;
        width: 200px;
        top: -42px;
        right: -200px !important;

        > p {
            font-size: 10px;
            width: 100%;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
`;

export const BoxIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #333;

    > svg {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        width: 30px;
        height: 30px;

        > svg {
            font-size: 18px;
        }
    }
`;
