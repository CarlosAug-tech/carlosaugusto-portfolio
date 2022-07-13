import styled, { css } from "styled-components";

interface ICardCarouselContainerProps {
    isActive: boolean;
    isActiveReversed: boolean;
}

interface IButtonPointCarousel {
    isActive: boolean;
}

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    padding: 40px 0;
    position: relative;
    overflow: hidden;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    //justify-content: center;
    width: 100%;
    height: 450px;
    overflow: hidden;
    //padding: 20px;
`;

export const CardCarouselContainer = styled.div<ICardCarouselContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    transform: translateX(100%);
    transition: all 0.4s ease;

    ${(props) =>
        props.isActive &&
        css`
            transform: translateX(0px);
        `};

    ${(props) =>
        props.isActiveReversed &&
        css`
            transform: translateX(-100%);
        `};
`;

export const CardCarousel = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    height: 350px;
    padding: 20px;
    position: relative;
    border-radius: 8px;
    color: #333;
    background: #fff;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
        0 1px 5px 0 rgb(0 0 0 / 20%);

    & + div {
        margin-left: 20px;
    }

    > img {
        width: 100%;
        //height: 100%;
        margin-bottom: 10px;
    }

    > h4 {
        margin-bottom: 10px;
        font-size: 18px;
        text-align: center;
    }

    > p {
        //flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5; /* number of lines to show */
        line-clamp: 5;
        -webkit-box-orient: vertical;
    }
`;

export const LinkRepository = styled.a`
    /* align-self: flex-end; */
    color: #333;
    right: 10px;
    bottom: 5px;
    position: absolute;
    font-size: 12px;
    font-weight: 700;
    text-decoration: underline;
    transition: all 0.4s ease;

    &:hover {
        color: #8d8d8d;
    }
`;

export const PointsCarousel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    bottom: -3px;
    position: absolute;
`;

export const ButtonPointCarousel = styled.button<IButtonPointCarousel>`
    border: 0;
    color: #fff;
    background: transparent;

    & + button {
        margin-left: 5px;
    }

    > svg {
        transition: all 0.4s ease;
    }

    ${(props) =>
        props.isActive &&
        css`
            > svg {
                color: orange;
            }
        `}
`;
