import styled from "styled-components";

export const Container = styled.div`
    //height: 100%;

    section {
        &:nth-child(2) {
            height: unset;
            position: relative;
        }

        &:nth-child(3) {
            color: #fff;
            background-color: #1064ae;

            > div {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        &:nth-child(4) {
            height: auto;
            position: relative;

            > div {
                display: flex;
                flex-direction: column;
                padding-top: 180px;
            }

            > svg {
                width: 100%;
                height: 250px;
                top: -40px;
                left: 0;
                position: absolute;
                transform: rotate(180deg);
                fill: #1064ae;
            }
        }

        &:nth-child(5) {
            //height: calc(100% + 70px);
            position: relative;
            background: #1064ae;

            > div {
                display: flex;
                flex-direction: column;
                padding-top: 180px;

                > h3 {
                    margin-bottom: 40px;
                    color: #fff;
                }
            }

            > svg {
                width: 100%;
                height: 250px;
                top: -40px;
                left: 0;
                position: absolute;
                transform: rotate(180deg);
                fill: #f5f5f5;
            }
        }
    }

    @media (max-width: 500px) {
        section {
            &:nth-child(4),
            &:nth-child(5) {
                > div {
                    padding-top: 40px;
                }

                > svg {
                    height: 100px;
                }
            }

            &:nth-child(3) {
                padding: 40px 5px;
            }
        }
    }
`;
