import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface ISideMenuButtonProps {
    isActive?: boolean;
}

export const Container = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 50%;
    right: 5px;
    position: fixed;
    transform: translateY(-50%);
`;

export const SideMenuButton = styled.div<ISideMenuButtonProps>`
    border: 0;
    position: relative;
    background: none;
    font-size: 10px;
    color: #ff8100;
    transition: all 0.4s ease;

    ${(props) =>
        props.isActive &&
        css`
            font-size: 14px;
        `}
`;
