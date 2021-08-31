import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'
import ProductHeader from '../components/Product/Header/ProductHeader'
import MapApp from '../components/map/Map'

const contacto = () => {
    return (
        <>
            <Navbar />
            <ProductHeader name="Contacto" />
            <MapApp />
            <Footer />
        </>
    )
}

export default contacto
