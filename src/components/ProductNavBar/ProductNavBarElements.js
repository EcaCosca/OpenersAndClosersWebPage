import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    background-color:rgba(165,167,168,0.3);
    background-image: linear-gradient(45deg, #b5b5b5, #a1a1a1);
    height: 60px;
    margin-top: 80px;
    background: ${({ scrollNav}) => (scrollNav ? '#111111' : 'transparent')};
    display: flex;
    justify-content: space-around;
    align-items: center;
    ${'' /* padding: 0.5rem calc((100 vw - 1000px) / 2); */}
    ${'' /* z-index: 10; */}
    position: fixed;
    ${'' /* top: 0; */}
    width: 80%;

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`

export const NavLink = styled(Link)`
    ${'' /* align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 11px;
    height: 100%;
    letter-spacing: 2px;
    padding: 0 1rem;
    text-decoration: none;

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
    } */}
`

export const NavMenu = styled.div`
    align-items: center;
    display: flex;
    list-style: none;
    margin-right: -22px;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`