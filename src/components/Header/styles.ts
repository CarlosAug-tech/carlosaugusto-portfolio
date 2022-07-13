import styled from "styled-components";

export const HeaderElement = styled.header`
    z-index: 100;
    width: 100%;
    padding: 0 20px;
    position: fixed;
    color: #fff;
    background: transparent;
`;

export const NavElement = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 80px;
    margin: auto;
`;

export const LogoContainer = styled.div`
    font-size: 16px;

    > a {
        display: flex;
        flex-direction: column;
        color: #fff;

        > h3 {
            position: relative;

            &::after {
                transition: all 0.8s ease;
            }
        }

        > span {
            align-self: flex-end;
            //margin-top: 3px;
            position: relative;
            font-size: 10px;

            &::after {
                transition: all 0.4s ease;
            }
        }

        > h3::after,
        span::after {
            content: "";
            width: 0;
            height: 3px;
            right: 0;
            bottom: -2px;
            position: absolute;
            background: #fff;
        }

        &:hover {
            > h3,
            > span {
                &::after {
                    width: 100%;
                }
            }
        }
    }
`;

export const ListElement = styled.ul`
    display: flex;
    align-items: center;
`;

export const ListItem = styled.li`
    & + li {
        margin-left: 5px;
        padding-left: 5px;
    }
`;

export const ListLink = styled.a`
    color: #fff;
    transition: all 0.4s ease;

    &:hover {
        color: #d9d9d9;
    }
`;
