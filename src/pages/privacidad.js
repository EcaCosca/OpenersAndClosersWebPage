import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Phrase, Char } from "animatedtxt";
import { ProductHeaderContainer, ProductH1 } from '../components/Product/Header/ProductHeaderElements';
import InfoPrivacidad from '../components/InfoPrivacidad/InfoPrivacidad';

const privacidad = () => {
    return (
        <div>
            <Navbar />
            <ProductHeaderContainer>
            <ProductH1>
                <Phrase margin={20} size={60} duration={1} color="#ffffff">
                    <Char char="P" />
                    <Char char="O" />
                    <Char char="L" />
                    <Char char="I" />
                    <Char char="T" />
                    <Char char="I" />
                    <Char char="C" />
                    <Char char="A" />
                </Phrase>
                <Phrase margin={20} size={30} duration={1} color="#ffffff">
                    <Char char="D" />
                    <Char char="E" />
                </Phrase>
                <Phrase margin={20} size={60} duration={1} color="#ffffff">
                    <Char char="P" />
                    <Char char="R" />
                    <Char char="I" />
                    <Char char="V" />
                    <Char char="A" />
                    <Char char="C" />
                    <Char char="I" />
                    <Char char="D" />
                    <Char char="A" />
                    <Char char="D" />
                </Phrase>
            </ProductH1>
            </ProductHeaderContainer>
            <InfoPrivacidad />
            <Footer />
        </div>
    )
}

export default privacidad
