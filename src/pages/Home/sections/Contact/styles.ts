import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    > form {
        display: flex;
        flex-wrap: wrap;
        max-width: 800px;
        width: 100%;
        padding: 20px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
            0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

        > div {
            &:nth-child(1),
            &:nth-child(2) {
                max-width: calc(400px - 25px);

                & + div {
                    margin: unset;
                    margin-left: 10px;
                }
            }

            &:nth-child(3) {
                margin-top: 20px !important;
                margin-left: unset !important;
            }
        }
    }

    @media (max-width: 900px) {
        > form {
            > div {
                &:nth-child(1),
                &:nth-child(2) {
                    max-width: unset;

                    & + div {
                        margin-top: 20px !important;
                        margin-left: unset !important;
                    }
                }
            }
        }
    }
`;
