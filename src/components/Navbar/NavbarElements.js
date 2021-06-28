import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background-color:rgba(165,167,168,0.3);
    background-image: linear-gradient(45deg, #b5b5b5, #a1a1a1);
    height: 80px;
    ${'' /* margin-top: -80px; */}
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem calc((100 vw - 1000px) / 2);
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
`;

export const NavLink = styled(Link)`
    color: #fff;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 11px;

    &.active {
        font-weight: 900;
        background-image: linear-gradient(45deg, #f25555, #575757);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        ${'' /* border-bottom: 3px solid #fff; */}
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size:1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`


export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #b8b8b8;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;