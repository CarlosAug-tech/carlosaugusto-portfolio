import styled from "styled-components";

export const SectionElement = styled.section`
    display: flex;
    flex-direction: column;
    //height: 100vh;
    height: 100%;
    padding: 40px;

    h3 {
        font-size: 60px;
        text-align: center;
        font-family: "Shadows Into Light", cursive;
    }

    &:first-child {
        background-color: red;
    }

    &:nth-child(odd) {
        h3 {
            color: #fff;
        }
    }

    &:nth-child(even) {
        h3 {
            color: #000;
        }
    }
`;

export const SectionElementContent = styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
`;
