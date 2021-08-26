import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PDFContainer = styled.div`
    align-items: center;
    background-image: linear-gradient(to bottom, rgb(98, 98, 98), rgba(249,249,249,1));
    background: linear-gradient (90deg, rgba(55,155,125,0), rgba(255,255,255,1));
    display: flex;
    flex-direction:column;
    ${'' /* height: 1000px; */}
    justify-content: center;
`

export const PDFH1 = styled.h1`
    color: #fff;
    font-size: 2rem;
    letter-spacing: 0.06em;
    margin-bottom: 64px;
    margin-top: 120px;
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
    background: none;
    border: none;
    color: inherit;
    margin: 10px;
`

export const PDFNavigation = styled.div`
    align-items: center;
    border-radius: 50px;
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 30px;
    outline: none;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 10px 30px 60px 25px rgba(0, 0, 0, 0.2), 10px 16px 30px 10px rgba(0, 0, 0, 0.19);
    }
`

export const NavButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    font-size: 1rem;
    font: inherit;
    margin: 10px;
    outline: none;
    padding: 0;

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
    background: #f25555;
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
        transition: all 0.2s ease-in-out;
        background: #f79c9c;
    }
`;