import React from 'react'
import { Phrase, Char } from "animatedtxt";
import { ProductHeaderContainer, ProductH1 } from './ProductHeaderElements';

const ProductHeader = () => {
    
    return (
        <ProductHeaderContainer>
            <ProductH1>
                <Phrase margin={20} size={100} duration={1} color="#ffffff">
                    <Char char="C" />
                    <Char char="E" />
                    <Char char="U" />
                    <Char char="R" />
                    <Char char="N" />
                    <Char char="A" />
                    <Char char="L" />
                    <Char char="I" />
                    <Char char="S" />
                    <Char char="T" />
                </Phrase>
            </ProductH1>
        </ProductHeaderContainer>
    )
}

export default ProductHeader
