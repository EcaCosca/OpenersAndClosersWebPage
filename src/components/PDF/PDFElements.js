import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PDFContainer = styled.div`
    height: 1000px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background: linear-gradient (90deg, rgba(55,155,125,0), rgba(255,255,255,1));
    background-image: linear-gradient(to bottom, rgb(98, 98, 98), rgba(249,249,249,1));
`

export const PDFH1 = styled.h1`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 64px;
    letter-spacing: 0.06em;
`

export const DocumentContainer =styled.div` 
    -webkit-box-shadow: 5px 25px 40px 18px rgba(0,0,0,0.26); 
    box-shadow: 5px 25px 40px 10px rgba(0,0,0,0.26);

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 10px 30px 60px 25px rgba(0, 0, 0, 0.2), 10px 16px 30px 10px rgba(0, 0, 0, 0.19);
    }
`

export const PDFp = styled.p`
    margin: 10px;
    color: inherit;
    background: none;
    border: none;
`

export const PDFNavigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 30px;
    border-radius: 50px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 10px 30px 60px 25px rgba(0, 0, 0, 0.2), 10px 16px 30px 10px rgba(0, 0, 0, 0.19);
    }
`

export const NavButton = styled.button`
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    color: inherit;
    background: none;
    font-size: 1rem;
    margin: 10px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #f79c9c;
    }
`

export const PDFDownload = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`


export const PDFDownloadLink = styled(Link)`
    border-radius: 50px;
    background: #f25555;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.06);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #f79c9c;
    }
`;