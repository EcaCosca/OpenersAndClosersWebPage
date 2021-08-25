import styled from "styled-components";

export const PDFContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background: linear-gradient (90deg, rgba(55,155,125,0), rgba(255,255,255,1));
    background-image: linear-gradient(to bottom, rgb(98, 98, 98), rgba(249,249,249,1));
`

export const PDFH1 = styled.h1`
    font-size: 2rem;
    letter-spacing: 0.1em;
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
    padding: 7px;
    background-color: #f2f2f2;
    -webkit-box-shadow: 5px 25px 40px 18px rgba(0,0,0,0.26); 
    box-shadow: 5px 25px 40px 10px rgba(0,0,0,0.26);

    &:hover {
        transition: all 0.4s ease-in-out;
        box-shadow: 10px 30px 60px 25px rgba(0, 0, 0, 0.2), 10px 16px 30px 10px rgba(0, 0, 0, 0.19);
    }
`