import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
// import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background-color:rgba(165,167,168,0.3);
    background-image: linear-gradient(45deg, #b5b5b5, #a1a1a1);
    height: 80px;
    ${'' /* margin-top: -80px; */}
    background: ${({ scrollNav}) => (scrollNav ? '#b5b5b5' : 'transparent')};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem calc((100 vw - 1000px) / 2);
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;

export const NavLink = styled(LinkR)`
    color: #fff;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 11px;

    &:hover {
        transition: all 0.4s ease-in-out;
        text-shadow: 2px 2px 4px #000000;
        -webkit-transform: scale(1.01);
        position: relative; 
        top: -2px;
    }

    &.active {
        font-weight: 900;
        background-image: linear-gradient(45deg, #f25555, #575757);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        cursor: pointer;
        display: block;
        font-size:1.8rem;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(-100%, 60%);
    }
`;

export const NavMenu = styled.div`
    align-items: center;
    display: flex;
    list-style: none;
    margin-right: -22px;
    text-align: center;

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


export const NavBtnLink = styled(LinkR)`
    background: #b8b8b8;
    border-radius: 50px;
    border: none;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.06);
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 10px 22px;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #fff;
        color: #010606;
        transition: all 0.2s ease-in-out;
    }
`;

export const NavLogo = styled(LinkR)`
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size:1.5rem;
    font-weight: bold;
    justify-self: flex-start;
    margin-left: 24px;
    text-decoration: none;
`

export const CompanyLogo = styled.img`
    height: 60px;
    margin: 10px;
    width: inherit;
`