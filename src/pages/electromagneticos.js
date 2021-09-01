import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import ProductHeader from '../components/Product/Header/ProductHeader'
import ProductNavbar from '../components/ProductNavBar/ProductNavBar'

const electromagneticos = () => {
    return (
        <>
            <Navbar />
            <ProductNavbar />
            <ProductHeader name='Electronicos'/>
            <Footer />
        </>
    )
}

export default electromagneticos
