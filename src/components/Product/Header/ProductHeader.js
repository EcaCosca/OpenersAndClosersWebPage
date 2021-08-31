import React from 'react'
import { Phrase, Char } from "animatedtxt";
import { ProductHeaderContainer, ProductH1 } from './ProductHeaderElements';

const ProductHeader = (name) => {
    let title = '';
    console.log(name)
    // title = props;
    console.log(title)
    const banner = title.toUpperCase().split('');

    return (
        <ProductHeaderContainer>
            <ProductH1>
                <Phrase margin={20} size={100} duration={1} color="#ffffff">
                    {banner.map((char) => {
                        return (
                            <Char char={char} />
                        );
                    })}
                </Phrase>
            </ProductH1>
        </ProductHeaderContainer>
    )
}

export default ProductHeader
