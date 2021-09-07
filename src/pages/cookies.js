import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import { Phrase, Char } from "animatedtxt";
import { ProductHeaderContainer, ProductH1 } from '../components/Product/Header/ProductHeaderElements';

const cookies = () => {
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
                    <Char char="C" />
                    <Char char="O" />
                    <Char char="O" />
                    <Char char="K" />
                    <Char char="I" />
                    <Char char="E" />
                    <Char char="S" />
                </Phrase>
            </ProductH1>
            </ProductHeaderContainer>
            <Footer />
        </div>
    )
}

export default cookies
