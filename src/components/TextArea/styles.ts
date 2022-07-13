import styled, { css } from "styled-components";

interface ITextAreaElement {
    isError: boolean;
}

export const Container = styled.div`
    width: 100%;
    position: relative;

    > textarea {
    }

    > label {
    }
`;

export const TextAreaElement = styled.textarea<ITextAreaElement>`
    width: 100%;
    min-height: 120px;
    padding: 10px 10px 10px 32px;
    border: 1px solid #333;
    border-radius: 4px;
    resize: none;

    &:-webkit-autofill {
        background-color: transparent !important;
        -webkit-box-shadow: 0 0 0 50px white inset;
    }

    &:focus,
    &:not(:placeholder-shown) {
        border: 1px solid #1064ae;
    }

    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
        padding: 0 3px;
        top: -8px;
        left: 5px;
        color: #1064ae;
        background: #fff;
    }

    ${(props) =>
        props.isError &&
        css`
            border: 2px solid red;

            &:focus,
            &:not(:placeholder-shown) {
                outline: none;
                border: 2px solid red;
            }

            & ~ svg {
                cursor: pointer;
                top: 18px;
                right: 8px;
                position: absolute;
                color: red;

                &:hover {
                    & ~ div {
                        visibility: visible;
                        opacity: 1;
                    }
                }
            }

            & ~ span {
                color: red;
            }
        `}
`;

export const LabelElement = styled.label`
    top: 10px;
    left: 33px;
    position: absolute;
    transition: all 0.4s ease;
    pointer-events: none;
`;

export const ErrorMessage = styled.div`
    z-index: 1;
    width: 200px;
    padding: 10px;
    top: 50px;
    right: -85px;
    position: absolute;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: red;
    //transform: translateX(-50%);
    transition: all 0.4s ease;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

    &::before {
        content: "";
        top: -10px;
        left: 50%;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid red;
        transform: translateX(-50%);
    }
`;
