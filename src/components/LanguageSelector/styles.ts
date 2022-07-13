import styled, { css } from "styled-components";

interface IContainerProps {
    isActive: boolean;
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    width: 30px;
    height: 30px;
    right: 5px;
    bottom: 5px;
    position: fixed;
    border-radius: 50%;
    background: #fff;
    transition: all 0.4s ease;
    transform: rotate(90deg);

    button {
        border: 0;
        background: transparent;
    }

    > button {
        width: 30px;
        height: 30px;
        border-radius: 50%;

        > img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            transform: rotate(90deg);
        }
    }

    ${(props) =>
        props.isActive &&
        css`
            > div {
                > button {
                    z-index: 1;

                    &:nth-child(1) {
                        right: 40px;
                    }

                    &:nth-child(2) {
                        right: 80px;
                    }
                }
            }
        `}
`;

export const LanguagenItems = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;

    > button {
        z-index: -1;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        right: 0;
        position: absolute;
        transition: all 0.4s ease;

        > img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            transform: rotate(90deg);
        }
    }
`;
