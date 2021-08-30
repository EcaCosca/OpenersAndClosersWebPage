import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ProductHeader from '../components/Product/Header/ProductHeader'
import ProductNavbar from '../components/ProductNavBar/ProductNavBar'


const electronicos = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Navbar />
            <ProductNavbar />
            <ProductHeader />
            

        </div>
    )
}

export default electronicos
